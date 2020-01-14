const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const twilio = require('twilio')('AC63722298f74133d875a71ed1fe580349', 'e1d2ea416ea4493e90a1ad2b0c700fa5');

module.exports = async (event, context, callback) => {
    try {
        const  verificationRequest = await twilio.verify.services('VAe65a81204367120c0cb0eb67d0fff7a3')
        .verifications
        .create({ to: '+919885994199', channel:'sms' });
        console.log('ver code', verificationRequest)
        
        return helpers.success({ data: verificationRequest });
    } catch (error) {
        return helpers.failure({ message: error });
    }
};