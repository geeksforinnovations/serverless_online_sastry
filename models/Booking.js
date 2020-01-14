'use strict';
const puja = require('./puja')
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    pujaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Puja can't be null or empty"
        },
        isInt: {
            msg:"Enter valid value for puja."
        },
        min: 1
      }
    },
    languge: DataTypes.STRING,
    name: {
       type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notNull: {
          msg: "Name can't be empty."
        },
        notEmpty:
        {
          msg: "Name can't be empty."
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Phone number can't be empty."
        },
        notNull: {
          msg: "Phone number can't be empty."
        }
      }
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Please enter valid value for Booking date.'
        },
        notNull: {
          msg: "Booking date can't be empty."
        }
      }
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Address line1 can't be null."
        },
        notEmpty:
        {
          msg: "Address line1 can't be empty."
        }
      }
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Address line2 can't be null."
        },
        notEmpty:
        {
          msg: "Name can't be empty."
        }
      }
    }

  }, {freezeTableName: true});
  Booking.associate = function (models) {
    // associations can be defined here
   // puja.belongsTo(Booking)
   Booking.belongsTo(models.Puja, {as: 'puja'});
  };
  return Booking;
};