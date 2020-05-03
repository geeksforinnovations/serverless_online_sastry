'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FAQ', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING(500)
    },
    answer: {
        type: Sequelize.STRING(1500)
    },
    created_date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    updated_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
    Last_updated_by: {
      type: Sequelize.STRING(50)
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FAQ');
  }
};