const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const pujaList = await dbModels.Puja
      .findAll({
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
                
              }],
          }
        ]
      });
    return helpers.success({ data: pujaList });
    callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};