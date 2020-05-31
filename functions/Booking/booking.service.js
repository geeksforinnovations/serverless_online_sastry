const dbModels = require('../../models')
var constants = require('../../utils/constants');
var emails = require('../../utils/emails');
var stripeService = require('../transactions/stripe.service')


module.exports.createBooking = async (booking, token) => {
  try {
    const selectedPuja = await dbModels.Pujas.findOne({ where: { id: booking.pujaId } });
    const description = "charges for " + selectedPuja.name + ".";
    const payment = await stripeService.pay(token, selectedPuja.cost, description )
    console.log('payment', payment);
    
    const createdBooking = await dbModels.Booking
      .create({
        date: booking.date,
        status: booking.status,
        languageId: booking.languageId,
        userId: booking.userId || 1,
        pujaStartDate: booking.pujaStartDate,
        pujaEndDate: booking.pujaEndDate,
        pujaId: booking.pujaId,
        pujaType: booking.pujaType || 'Online',
        customerName: booking.customerName,
        email: booking.email,
        phone: booking.phone
      });
    let pujariArray = booking['selectedPujaries'] || [];
    let bp = await createBooking_Pendings(pujariArray,createdBooking);
     sendEmails(pujariArray,booking).then()
    console.log(createdBooking);
    return createdBooking;
  } catch (error) {
    throw error
  }
}

var createBooking_Pendings = async (pujariArray, createdBooking) => {
  let bpArray = pujariArray.map((pujariId) => {
    return {
      "pujariId": pujariId,
      "bookingId": createdBooking['id'],
      "status": constants.PENDING
    }
  })
  return await dbModels.Booking_pendings.bulkCreate(bpArray, { returning: true });
}

var sendEmails = async (pujariArray, booking) => {
  let pujariEmailIdArray = async () => {
    return Promise.all(pujariArray.map(async (pujariId) => {
      let pujari = await dbModels.Pujari.findOne({ where: { id: pujariId } });
      return pujari.email;
    }));
  }
  await emails.sendBookingConfirmationToCustomer(booking);
  await emails.sendBookingReceivedEmailToPujari(await pujariEmailIdArray(),1);
}

module.exports.getAllBookings = async (event) => {
  queryParams = event.queryStringParameters;
  // validateQueryParams()
  try {
    const bookings = await dbModels.Booking
      .findAll({
        include: [
          {
            model: dbModels.Pujas,
            required: true,
            as: 'puja'
          }
        ],
        where: event.queryStringParameters
      });
    return bookings;
  } catch (error) {
    throw error
  }
}

module.exports.getBookingsByPhoneNumber = async (phoneNumber) => {
  try {
    const bookings = await dbModels.Booking.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: dbModels.Pujas,
          required: true,
          attributes: ['id', 'name', 'timeInHrs', 'pujaType', 'cost', 'imageId'],
          as: "puja"
        }
      ],
      where: {
        phoneNumber: phoneNumber
      }
    });
    return bookings
  } catch (error) {
    throw error
  }

}

module.exports.updateBooking = async (booking) => {
  try {
    // const booking = JSON.parse(event.body);;
    //  var booking = {
    //    id:2, pujaId: 1, languageId: 1, name: 'Manjunath test', phoneNumber: '123456',
    //     bookingDate: new Date(), addressLine1: 'test lingampally', addressLine2: 'MIG test',
    //     requirePujaType:'Online',videoCallUserName:'test@skype',status:'Active'
    // }; 
    const bookingDetails = {
      //languageId: booking.languageId,
      bookingDate: booking.bookingDate,
      // requirePujaType: booking.requirePujaType,
      // videoCallUserName: booking.videoCallUserName,
      // status: booking.status
    }
    const updatedBooking = await dbModels.Booking
      .update(booking, { where: { id: booking.id } });


    return updatedBooking
  } catch (error) {
    throw error
  }
}


module.exports.cancelBookng = async (bookingId) => {
  try {
    const isCancelled = await dbModels.Booking
      .update({ status: constants.CANCELLED }, { where: { id: bookingId } });
    return isCancelled
  } catch (error) {
    throw error
  }

}




module.exports.deleteBooking = async (bookingId) => {
  try {
    const isDeleted = await dbModels.Booking
      .destroy({ where: { id: bookingId } });
    return isDeleted
  } catch (error) {
    throw error
  }
}


// let bpArray = pujariArray.map((pujariId) => {
//   return {
//     "pujariId": pujariId,
//     "bookingId": createdBooking['id'],
//     "status": constants.PENDING
//   }
// })
// const bp = await dbModels.Booking_pendings.bulkCreate(bpArray, { returning: true});