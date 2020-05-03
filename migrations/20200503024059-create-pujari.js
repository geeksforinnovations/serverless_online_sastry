'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pujari', {
      poojariId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,    
        type: Sequelize.STRING(50)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      middleName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(2000)
      },
      contactNo: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      address2: {
        type: Sequelize.STRING(100)
      },
      pujariType: {
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull: false,

        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      pujariTimeZone: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      pujariLanguageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PujariLanguages',
          key: 'pujariLanguageId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      pujariActive: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Pujari');
  }
};