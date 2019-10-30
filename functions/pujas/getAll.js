const dbModels = require('../../models')

module.exports = async (event, context, callback) => {
  const x = await dbModels.Puja
    .findAll();
  callback(null, x)

};