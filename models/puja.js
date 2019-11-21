'use strict';
var validator = require('validator');
var pujaLanguages = require('./pujaLanguages');

module.exports = (sequelize, DataTypes) => {
  var Puja = sequelize.define('Puja', {
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
          msg: 'Please enter valid value for time in hrs.'
        },
        notNull: {
          msg: "TimeInHrs can't be empty."
        }
      }
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'Please enter valid value for cost.'
        },
        notNull: {
          msg: "Cost can't be empty test."
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
    },
    pujaType: {
      type: DataTypes.ENUM,
     values: ['Offline', 'Online', 'Both'],
      allowNull: false,
      validate: {
        notNull: {
          msg: "Type can't be null."
        },
        customValidator(value) {
          var types = ['Offline', 'Online', 'Both']
          if (!types.includes(value)) {
            throw new Error("Enter valid value for type.");
          }
        }
      }
    }

  }, {});
  Puja.associate = function (models) {
    Puja.hasMany(models.PujaLanguage);
  };
  return Puja;
};

