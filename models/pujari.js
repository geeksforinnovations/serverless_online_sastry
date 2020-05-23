'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var Pujari = sequelize.define('Pujari', {
        PujariId: {
            field: 'id',
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notNull: {
                    msg: "id can't be empty."
                }
            }
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "firstName can't be empty."
                }
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "lastName can't be empty."
                }
            }
        },

        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {
            //     msg: "middleName can't be empty."
            //   }
            // }
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {s
            //     msg: "lastName can't be empty."
            //   }
            // }
        },

        contactNo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "contactNo can't be empty."
                }
            }
        },

        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "address1 can't be empty."
                }
            }
        },

        address2: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {
            //     msg: "address2 can't be empty."
            //   }
            // }
        },

        pujariType: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {
            //     msg: "pujariType can't be empty."
            //   }
            // }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "city can't be empty."
                }
            }
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "country can't be empty."
                }
            }
        },

        pujariTimeZone: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {
            //     msg: "pujariType can't be empty."
            //   }
            // }
        },
        pujariActive: {
            type: DataTypes.ENUM,
           values: ['accepted', 'requested', 'denied','inActive'],
            allowNull: false,
            validate: {
              notNull: {
                msg: "Type can't be null."
              },
              customValidator(value) {
                var types = ['accepted', 'requested', 'denied','inActive']
                if (!types.includes(value)) {
                  throw new Error("Enter valid value for pujariActive.");
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
        imageId: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //   notNull: {
            //     msg: "pujariType can't be empty."
            //   }
            // }
        },

    }, { freezeTableName: true });
    Pujari.associate = function (models) {
        // associations can be defined here
        // Pujari.belongsTo(models.Pujari);
    };
    Pujari.removeAttribute('PujariId');
    return Pujari;
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