'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.resolve()
          .then(() =>
              queryInterface.addColumn('Pujas', 'imageId', {
                  type: Sequelize.STRING
              })
          )
  },

  down: function (queryInterface, Sequelize) {
      return [
          queryInterface.removeColumn('Pujas', 'imageId')
      ];
  }
};