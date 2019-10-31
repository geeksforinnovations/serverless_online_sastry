const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const x = await dbModels.Puja.findOne({ where: { id: event.pathParameters.id } });
    return helpers.success({ data: x });

  } catch (error) {

    return helpers.failure({ message: error.message });
  }
};