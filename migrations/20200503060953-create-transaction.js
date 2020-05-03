'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stripeId: {
        type: Sequelize.STRING(45)
      },
      bookingId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Booking',
          key: 'bookingId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      status:{
        type: Sequelize.STRING(50),
        allowNull: false,
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
    return queryInterface.dropTable('Transaction');
  }
};