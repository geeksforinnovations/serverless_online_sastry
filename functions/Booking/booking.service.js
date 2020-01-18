const dbModels = require('../../models')
const helpers = require("../../utils/helpers");


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
        return helpers.success({ data: createdBooking });
    } catch (error) {
        return helpers.failure({ message: error.message });
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
        return helpers.success({ data: bookings });
      } catch (error) {
        return helpers.failure({ message: error.message });
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
              attributes:['id', 'name', 'timeInHrs', 'pujaType', 'cost', 'imageId'],
              as: "puja"
            }
          ],
          where: {
            phoneNumber: phoneNumber
          }
        });
        return helpers.success({ data: bookings });
      } catch (error) {
        return helpers.failure({ message: error.message });
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
            pujaId: booking.pujaId, languageId: booking.languageId, name: booking.name,
            phoneNumber: booking.phoneNumber, bookingDate: booking.bookingDate,
            addressLine1: booking.addressLine1, addressLine2: booking.addressLine2,
            requirePujaType: booking.requirePujaType, videoCallUserName: booking.videoCallUserName,
            status: booking.status
        }
        const updatedBooking = await dbModels.Booking
            .update(bookingDetails, { where: { id: booking.id } });


        return helpers.success({ data: updatedBooking });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
}


module.exports.cancelBookng = async (bookingId) => {
    try {
        const isCancelled = await dbModels.Booking
            .update({ status: 'Cancelled' }, { where: { id: bookingId } });
        return helpers.success({ data: isCancelled });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }

}




module.exports.deleteBooking = async (bookingId) => {
    try {
        const isDeleted = await dbModels.Booking
            .destroy({ where: { id:  bookingId} });
        return helpers.success({ data: isDeleted });
    } catch (error) {
        return helpers.failure({message: error.message});
    }
}


