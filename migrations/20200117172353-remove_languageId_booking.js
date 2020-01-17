'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve()
    .then(() =>{
      queryInterface.removeColumn('Booking', 'languageId')
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
