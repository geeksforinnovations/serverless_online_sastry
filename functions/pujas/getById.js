const dbModels = require('../../models')

module.exports = async (event, context, callback) => {
  const x = await dbModels.Puja
    .findOne({where: {id:1}});
  callback(null, x)

};