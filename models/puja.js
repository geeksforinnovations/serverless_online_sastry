'use strict';
var validator = require('validator');
var pujaLanguages = require('./pujaLanguages');

module.exports = (sequelize, DataTypes) => {
  var Puja = sequelize.define('Pujas', {
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
    type: {
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
    },
    imageId: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image can't be empty."
        },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Image can't be empty");
          }
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive'],
      allowNull: false,
      defaultValue: 'active',
      validate: {
          notNull: {
              msg: "Type can't be null."
          },
          customValidator(value) {
              var types = ['active', 'inactive']
              if (!types.includes(value)) {
                  throw new Error("Enter valid value for status.");
              }
          }
      }
  },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: getDate(),
      validate: {
        notNull: {
          msg: "created_date can't be empty."
        }
      }
    },

    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },

    updatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: getDate(),
      validate: {
        notNull: {
          msg: "updated_date can't be empty."
        }
      }
    },

    lastUpdatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },

  }, {});
  Puja.associate = function (models) {
    Puja.hasMany(models.PujaLanguages);
    // Puja.hasMany(models.Booking);
  };
  return Puja;
};

function getDate() {
  var date;
  date = new Date();
  date = date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2) + ':' +
      ('00' + date.getUTCSeconds()).slice(-2);
  return date;
}