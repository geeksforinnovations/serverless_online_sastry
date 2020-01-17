'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve()
    .then(() =>{
    queryInterface.renameColumn('Booking', 'languge', 'languageId')
    })
  },

  down: (queryInterface, Sequelize) => {
  }
};
