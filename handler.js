'use strict';

const dbModels = require('./models/index')

module.exports.hello = async (event, context, callback) => {
  const x = await dbModels.Puja
    .findAll();
  callback(null, x)

};
