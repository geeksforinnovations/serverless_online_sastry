const dbModels = require('../../models')



module.exports.createBooking = async (booking) => {
  try {
    const createdBooking = await dbModels.Booking
      .create({
        date: booking.date, status: booking.status,
        languageId: booking.languageId, userId: booking.userId,
        pujaStartDate: booking.pujaStartDate, pujaEndDate: booking.pujaEndDate,
        pujaId: booking.pujaId,
        pujaType: booking.pujaType, created_date: booking.created_date, created_by: booking.created_by, updated_date: booking.updated_date,
        Last_updated_by: booking.Last_updated_by
      });
    return createdBooking;

  } catch (error) {
    throw error
  }
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
        where:event.queryStringParameters
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
      .update(bookingDetails, { where: { id: booking.id } });


    return updatedBooking
  } catch (error) {
    throw error
  }
}


module.exports.cancelBookng = async (bookingId) => {
  try {
    const isCancelled = await dbModels.Booking
      .update({ status: 'Cancelled' }, { where: { id: bookingId } });
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


