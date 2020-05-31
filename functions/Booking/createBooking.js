
const service = require('./booking.service')
const helpers = require("../../utils/helpers");
const otpService = require('../otp/otp.service')

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);
        console.log("create booking started")
        const data = await service.createBooking(booking);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};