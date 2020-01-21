
const service = require('./booking.service')
const sendEmail = require('../email/mail.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);
        const data = await service.createBooking(booking);
        await sendEmail(booking)
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};