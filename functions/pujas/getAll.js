const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const pujaList = await dbModels.Puja
      .findAll();
    return helpers.success({ data: pujaList });
    callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};