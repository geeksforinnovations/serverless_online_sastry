'use strict';
const puja = require('./puja')
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    bookingId: {
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

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: getDate(),
      validate: {
        notNull: {
          msg: "date can't be empty."
        }
      }
    },

    status: {
      type: DataTypes.ENUM,
      values: ['Active', 'Completed', 'cancelled']
    },

    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Language id can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for language id. language Id should be a number"
        },
        min: 1
      }
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "userId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for userId. should be a number"
        },
        min: 1
      }
    },

    pujaStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Please enter valid value for Booking date.'
        },
        notNull: {
          msg: "pujaStartDate can't be empty."
        }
      }
    },

    pujaEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Please enter valid value for Booking date.'
        },
        notNull: {
          msg: "pujaEndDate can't be empty."
        }
      }
    },

    pujariId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
      // validate: {
      //   notNull: {
      //     msg: "pujariId can't be null or empty."
      //   },
      //   isInt: {
      //     msg: "Enter valid value for pujariId. should be a number"
      //   },
      //   min: 1
      // }
    },

    pujaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "pujaId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for pujaId. should be a number"
        },
        min: 1
      }
    },

    pujaType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Offline', 'Online'],
      validate: {
        notNull: {
          msg: "Puja type can't be null."
        },
        notEmpty:
        {
          msg: "Puja type can't be empty."
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
  Booking.associate = function (models) {
    // associations can be defined here
    // puja.belongsTo(Booking)
    Booking.belongsTo(models.Pujas, { as: 'puja' });
  };
  return Booking;
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