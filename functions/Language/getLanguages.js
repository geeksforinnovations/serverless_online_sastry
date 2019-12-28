const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const languages = await dbModels.Language
      .findAll({
        attributes: ['id','name'],
      });
    //console.log("pujas", x)
    return helpers.success({ data: languages });
    callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};