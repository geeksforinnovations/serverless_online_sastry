"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pujas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      about: {
        type: Sequelize.TEXT,
      },
      timeInHrs: {
        type: Sequelize.FLOAT,
      },
      requiredThings: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["Offline", "Online", "Both"],
      },
      imageId: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.FLOAT,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pujas");
  },
};
