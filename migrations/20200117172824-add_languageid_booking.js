'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.resolve()
          .then(() =>
              queryInterface.addColumn('Booking', 'languageId', {
                type:   Sequelize.INTEGER,
              })
              
          )
  },
  down: function (queryInterface, Sequelize) {
      return [
          queryInterface.removeColumn('Booking', 'languageId')
      ];
  }
};
