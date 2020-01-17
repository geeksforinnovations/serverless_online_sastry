const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);;
        //  var booking = {
        //         pujaId: 12, languageId: null, name: 'Manjunath', phoneNumber: '123456',
        //         bookingDate: new Date(), addressLine1: 'lingampally', addressLine2: 'MIG',
        //         requirePujaType:'Online',videoCallUserName:'test@skype',status:'Active'
        //     }; 
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
};