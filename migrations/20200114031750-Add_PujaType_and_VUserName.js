'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.resolve()
          .then(() =>
              queryInterface.addColumn('Booking', 'requirePujaType', {
                type:   Sequelize.ENUM,
                values: ['Offline', 'Online']
              }),
              queryInterface.addColumn('Booking', 'videoCallUserName', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('Booking', 'status', {
                type:   Sequelize.ENUM,
                values: ['Active', 'Completed','cancelled']
              })
          )
  },

  down: function (queryInterface, Sequelize) {
      return [
          queryInterface.removeColumn('Booking', 'requirePujaType'),
          queryInterface.removeColumn('Booking', 'videoCallUserName'),
          queryInterface.removeColumn('Booking', 'status')

      ];
  }
};