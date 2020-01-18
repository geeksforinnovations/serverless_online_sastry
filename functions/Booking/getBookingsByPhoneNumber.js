const service = require('./booking.service')

module.exports = async (event, context, callback) => {
  const phoneNumber = event.pathParameters.id;
    return service.getBookingsByPhoneNumber(phoneNumber);
};
