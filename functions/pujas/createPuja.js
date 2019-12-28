const dbModels = require('../../models')
const helpers = require("../../utils/helpers");


module.exports = async (event, context, callback) => {
  try {
    const puja = JSON.parse(event.body);

    let pujaLanguages=[];
    //  const puja = {id:0,name:'Test',description:'Test',about:'Test',
    //   timeInHrs:4
    //   ,requiredThings:'',
    //   pujaType:'Offline',cost:10000,pujaLanguageIds:[1,2,3],imageId:'test'}

    const Languages = dbModels.Puja.hasMany(dbModels.PujaLanguage, { as: 'languages', foreignKey: 'pujaid' });
    if (puja.pujaLanguageIds != null && Array.isArray(puja.pujaLanguageIds))
      puja.pujaLanguageIds.map(element => {
        pujaLanguages.push({ languageId: element });
      });
    const createdPuja = await dbModels.Puja
      .create({
        name: puja.name, description: puja.description, about: puja.about,
        timeInHrs: puja.timeInHrs, requiredThings: puja.requiredThings,
        pujaType: puja.pujaType, cost: puja.cost,
        languages: pujaLanguages,imageId:puja.imageId
      },
        {
          include: [{
            association: Languages,
            as: 'languages'
          }]
        });
    return helpers.success({ data: createdPuja });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
