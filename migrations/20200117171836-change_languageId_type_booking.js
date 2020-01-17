'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve()
    .then(() =>{
    queryInterface.changeColumn('Booking', 'languageId', {
      type: Sequelize.INTEGER,
      allowNull: false
      //defaultValue: 0.0
    })
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
