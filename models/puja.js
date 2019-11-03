'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const Puja = sequelize.define('Puja', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name can't be empty."
        },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Name can't be empty");
          }
        }
      }
    },
    description: DataTypes.STRING,
    about: DataTypes.STRING,
    timeInHrs: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'TimeInHrs should be float'
        },
        notNull: {
          msg: "TimeInHrs can't be empty."
        }
      }
    },
    requiredThings: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Required things can't be null."
        }
      }
    }

  }, {});
  Puja.associate = function (models) {
    // associations can be defined here
  };
  return Puja;
};