'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PujaLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING(50),
      },
      pujaid:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Pujas',
          key: 'pujaId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      languageId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Languages',
          key: 'languageId', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

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
    return queryInterface.dropTable('PujaLanguages');
  }
};