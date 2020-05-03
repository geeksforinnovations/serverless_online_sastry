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
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.STRING,
      },
      timeInHrs: {
        type: Sequelize.FLOAT,
      },
      requiredThings: {
        type: Sequelize.JSON,
      },
      pujaType: {
        type: Sequelize.ENUM,
        values: ["Offline", "Online", "Both"],
      },
      imageId: {
        type: Sequelize.STRING
      },
      created_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      created_by: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      updated_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      Last_updated_by: {
        type: Sequelize.STRING(50),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pujas");
  },
};
