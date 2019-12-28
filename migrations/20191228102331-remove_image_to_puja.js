'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.resolve()
          .then(() =>
          queryInterface.removeColumn('Pujas', 'imageId')
          )
  },

  down: function (queryInterface, Sequelize) {
      return [
          queryInterface.removeColumn('Pujas', 'imageId')
      ];
  }
};