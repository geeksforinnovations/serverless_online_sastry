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
      type: {
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
      timeZone: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      status: {
        type: Sequelize.ENUM,
        values: ['accepted', 'requested', 'denied','inActive'],
      },
      imageId: {
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      experience: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pujari');
  }
};