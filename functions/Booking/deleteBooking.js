const service = require('./booking.service')

module.exports = async (event, context, callback) => {
    return service.deleteBooking( event.pathParameters.id);
};

