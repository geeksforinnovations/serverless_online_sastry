'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var Pujari_reviews = sequelize.define('Pujari_reviews', {
        Pujari_reviewsId: {
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

        reviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: getDate(),
            validate: {
                notNull: {
                    msg: "reviewDate can't be empty."
                }
            }
        },

        rating: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "rating can't be empty."
                }
            }
        },

        review: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "review can't be empty."
                }
            }
        },

        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
              notNull: {
                msg: "userId can't be empty."
              }
            }
        },

        pujariId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
              notNull: {
                msg: "pujariId can't be empty."
              }
            }
        },

        pujaId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "pujaId can't be empty."
                }
            }
        },

        visibleFlag: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "visibleFlag can't be empty."
                }
            }
        },

        bookingId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "bookingId can't be empty."
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
    Pujari_reviews.associate = function (models) {
        // associations can be defined here
        // Pujari.belongsTo(models.Pujari);
    };
    return Pujari_reviews;
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