'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pujari', {
      id: {
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
      status: {
        type: Sequelize.ENUM,
        values: ['accepted', 'requested', 'denied','inActive'],
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdBy: {
        type: Sequelize.STRING(50)
      },
      updatedDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      LastUpdatedBy: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pujari');
  }
};