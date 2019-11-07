'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pujaId: {
        type: Sequelize.INTEGER
      },
      languge:{
        type: Sequelize.STRING
      },
      name:{
        type: Sequelize.STRING
      },
      phoneNumber:{
        type: Sequelize.STRING
      },
      bookingDate:{
        type: Sequelize.DATE
      },
      addressLine1:{
        type: Sequelize.STRING
      },
      addressLine2:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Booking');
  }
};