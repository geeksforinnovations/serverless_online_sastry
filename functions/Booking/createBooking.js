const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);
        /* var booking = {
            pujaId: 12, languge: 'Telugu', name: 'Manjunath', phoneNumber: '123456',
            bookingDate: new Date(), addressLine1: 'lingampally', addressLine2: 'MIG'
        }; */
        const createdBooking = await dbModels.Booking
            .create({
                pujaId: booking.pujaId, languge: booking.languge, name: booking.name,
                phoneNumber: booking.phoneNumber, bookingDate: booking.bookingDate,
                addressLine1: booking.addressLine1, addressLine2: booking.addressLine2
            });
        return helpers.success({ data: createdBooking });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};