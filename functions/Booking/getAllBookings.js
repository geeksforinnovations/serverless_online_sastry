const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const faqList = await dbModels.Booking
      .findAll();
    return helpers.success({ data: faqList });
    callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};