const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const pujaDetails = await dbModels.Puja.findOne({ where: { id: event.pathParameters.id },
      include: [
        {
          model: dbModels.PujaLanguage,
          attributes: ['LanguageId'],
          required: true,
          include: [
            {
              model: dbModels.Language,
              attributes: ['name'],
              required: true,
            }
          ]
        }
      ]      
            });
    return helpers.success({ data: pujaDetails });

  } catch (error) {

    return helpers.failure({ message: error.message });
  }
};