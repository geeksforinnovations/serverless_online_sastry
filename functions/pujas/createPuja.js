const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    //const puja = JSON.parse(event.body);
    const puja = {name:'type',description:'puja.description',about:'puja.about',
      timeInHrs:1
      ,requiredThings:'puja.requiredThings',
      pujaType:'Online2',cost:12}
    const createdPuja = await dbModels.Puja
      .create({name:puja.name,description:puja.description,about:puja.about,
        timeInHrs:puja.timeInHrs,requiredThings:puja.requiredThings,
        pujaType:puja.pujaType,cost:puja.cost});
    return helpers.success({ data:  createdPuja});
    //callback(null, x)
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};