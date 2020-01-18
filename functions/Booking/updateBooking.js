const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);;
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
};