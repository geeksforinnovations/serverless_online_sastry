const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./pujariService')


module.exports = async (event, context, callback) => {
  try {
    const pujari = JSON.parse(event.body);
    // const otpResult = await otpService.verifyOTP(booking.phoneNumber, booking.otpCode);
    // if (helpers.isUndefined(otpResult)) {
    //     console.error('unable to send OTP')
    //     throw new Error("otp failed")
    // }
    console.log("create pujari started");
    const data = await service.createPujari(pujari);
  //  const email = await emailService.sendBookingConfirmation(booking)
    return helpers.success({ data: data });
} catch (error) {
    return helpers.failure({ message: error.message });
}
};
