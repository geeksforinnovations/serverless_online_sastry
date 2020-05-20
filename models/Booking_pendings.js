'use strict';
const puja = require('./puja')
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const Booking_Pendings = sequelize.define('Booking_pendings', {
    bookingPendingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id",
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notNull: {
          msg: "Puja can't be null or empty"
        },
        isInt: {
          msg: "Enter valid value for puja."
        },
        min: 1
      }
    },

    pujariId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "pujariId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for pujariId. should be a number"
        },
        min: 1
      }
    },

    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "bookingId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for bookingId. should be a number"
        },
        min: 1
      }
    },

    status: {
      type: DataTypes.ENUM,
     values: ['pending', 'accepted', 'denied'],
      allowNull: false,
      validate: {
        notNull: {
          msg: "status can't be null."
        },
        customValidator(value) {
          var types = ['pending', 'accepted', 'denied']
          if (!types.includes(value)) {
            throw new Error("Enter valid value for status.");
          }
        }
      }
    },

    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: getDate(),
      validate: {
        notNull: {
          msg: "created_date can't be empty."
        }
      }
    },

    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },

    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: getDate(),
      validate: {
        notNull: {
          msg: "updated_date can't be empty."
        }
      }
    },

    Last_updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },


  }, { freezeTableName: true });
  Booking_Pendings.associate = function (models) {
    // associations can be defined here
    // puja.belongsTo(Booking)
    // Booking_Pendings.belongsTo(models.Pujas, { as: 'puja' });
  };
  return Booking_Pendings;
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