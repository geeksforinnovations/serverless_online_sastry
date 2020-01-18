module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.resolve()
          .then(() =>
              queryInterface.addColumn('AppSettings', 'createdAt', {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
              }),
              queryInterface.addColumn('AppSettings', 'updatedAt', {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
              })
          )
  },

  down: function (queryInterface, Sequelize) {
      return [
          queryInterface.removeColumn('AppSettings', 'createdAt'),
          queryInterface.removeColumn('AppSettings', 'updatedAt')
      ];
  }
};