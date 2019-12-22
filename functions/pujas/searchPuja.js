const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const Sequelize = require('sequelize');

module.exports = async (event, context, callback) => {
  try {
    const queryParams = JSON.parse(event.body);
    //const queryParams = { pujaname: '', pujatype: 'Both', languagename: null }
    if (queryParams.pujatype == null || queryParams.pujatype == '') {
      queryParams.pujatype = ['Online','Offline'];
    }
    const pujas = await dbModels.Puja.findAll({
      required: true,
      where:
      {
        [Sequelize.Op.and]: {
          name: {
            [Sequelize.Op.like]: (queryParams.pujaname == null ? '%' : '%' + queryParams.pujaname + '%')
          },
          pujaType: {
            [Sequelize.Op.or]: queryParams.pujatype == "Both" ? [queryParams.pujatype] : [queryParams.pujatype, 'Both']
       }
        }
      },
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
              where:
              {
                [Sequelize.Op.and]: {
                  name: {
                    [Sequelize.Op.like]: (queryParams.languagename == null ? '%' : '%' + queryParams.languagename + '%')
                  }
                }
              },
            }],
        }
      ]
    });
    return helpers.success({ data: pujas });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
}