const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const appSettingsList = await dbModels.AppSettings
      .findAll(
        { where : { key: 
        event.pathParameters.id 
        } }
      );
    return helpers.success({ data: appSettingsList });
    callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};