'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PujariLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      languageId: {
        type: Sequelize.INTEGER,
        references: { // <--- is this redundant to associate
          model: 'Languages',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      },
      pujariId: {
        type: Sequelize.INTEGER,
        references: { // <--- is this redundant to associate
          model: 'Pujari',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
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
    return queryInterface.dropTable('PujariLanguages');
  }
};