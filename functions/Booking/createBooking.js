
const service = require('./booking.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const req = JSON.parse(event.body);
        console.log("create booking started")
        const data = await service.createBooking(req.booking, req.token);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};