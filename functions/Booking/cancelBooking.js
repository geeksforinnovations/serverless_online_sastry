
const service = require('./booking.service')

module.exports = async (event, context, callback) => {
    return service.cancelBookng( event.pathParameters.id);
};