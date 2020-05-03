'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Booking', {
      bookingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      languageId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Languages',
          key: 'languageId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      pujaStartDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      pujaEndDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      pujariId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pujari',
          key: 'poojariId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      pujaId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pujas',
          key: 'pujaId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      createdsta_date: {
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
    return queryInterface.dropTable('Booking');
  }
};