const dbModels = require('../../models')
const service = require('./booking.service')

module.exports = async (event, context, callback) => {
    return service.getAllBookings();
};