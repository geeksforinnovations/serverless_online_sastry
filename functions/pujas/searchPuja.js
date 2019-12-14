const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const Sequelize = require('sequelize');

module.exports = async (event, context, callback) => {
  try {

    const queryParams = JSON.parse(event.body);
    //const queryParams ={pujaname:'',pujatype:null,languagename:'tel'}

    const pujas = await dbModels.Puja.findAll({
      required: true,
      where:
      {
        [Sequelize.Op.and]: {
          name: {
            [Sequelize.Op.like]: (queryParams.pujaname == null ? '%' : '%' + queryParams.pujaname + '%')
          },
          pujaType: {
            [Sequelize.Op.like]: (queryParams.pujatype == null ? '%' : '%' + queryParams.pujatype + '%')
          }
        }
      },
      include: [
        {
          model: dbModels.PujaLanguage,
          attributes: ['pujaid', 'languageId'],
          required: true,
          include: [
            {
              model: dbModels.Language,
              attributes: ['name'],
              where:
              {
                [Sequelize.Op.and]: {
                  name: {
                    [Sequelize.Op.like]: (queryParams.languagename == null ? '%' : '%' + queryParams.languagename + '%')
                  }
                }
              },
            }],
          // where:whereCondtion

        }
      ]
    });
    return helpers.success({ data: pujas });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
}




/*  // try {
    const conditions = JSON.parse(event.body);
    // // const conditions = { pujaType: 'Online', name: 'type' }
    // const x = await dbModels.Puja
    //   .findAll({
    //     where: conditions,
    //   }
    //   );
    // console.log("pujas", x)
    //return helpers.success({ data: x });

    const x = await dbModels.Puja.findAll({
      //attributes: ['country_id', 'country_name'],
      required: true,
      include: [
        {
          model: dbModels.PujaLanguage,
          attributes: ['pujaid', 'laguageid'],
          // required:true,

          /*              include: [
                           {
                               model: hp_district,
                               attributes: ['district_id', 'district_name'],
                               required:true,
                               include: [
                                   {
                                       model: hp_city,
                                       attributes: ['city_id', 'city_name'],
                                       required:true, */

/*           where: {
            $and: [
              Sequelize.literal("hp_country.country_status=1"),
              Sequelize.literal("hp_states.state_status=1"),
              //Sequelize.literal("hp_districts.state_status=1")

            ]

          } */

/*         }]
      });
      return helpers.success({ data: x });
  }).then(function (state) {

      console.log(state);

    });


  callback(null, x)
/* } catch (error) {
  return helpers.failure({ message: error.message });
} */