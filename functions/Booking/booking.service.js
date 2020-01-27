const dbModels = require('../../models')



module.exports.createBooking = async (booking) => {
  try {
    const createdBooking = await dbModels.Booking
      .create({
        pujaId: booking.pujaId, languageId: booking.languageId, name: booking.name,
        phoneNumber: booking.phoneNumber, bookingDate: booking.bookingDate,
        addressLine1: booking.addressLine1, addressLine2: booking.addressLine2,
        requirePujaType: booking.requirePujaType, videoCallUserName: booking.videoCallUserName,
        status: booking.status
      });
    return createdBooking;

  } catch (error) {
    throw error
  }
}


module.exports.getAllBookings = async () => {
  try {
    const bookings = await dbModels.Booking
      .findAll({
        include: [
          {
            model: dbModels.Puja,
            required: true,
            as: 'puja'
          }
        ]
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
          model: dbModels.Puja,
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


