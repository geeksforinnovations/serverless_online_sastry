'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var PujariLanguages = sequelize.define('PujariLanguages', {
        // PujariLanguagesId: {
        //     field: 'id',
        //     type: DataTypes.NUMBER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     validate: {
        //         notNull: {
        //             msg: "id can't be empty."
        //         }
        //     }
        // },

        languageId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "languageId can't be empty."
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
        }

    }, { freezeTableName: true });
    PujariLanguages.associate = function (models) {
        // associations can be defined here
        PujariLanguages.belongsTo(models.Languages);
    };
    return PujariLanguages;
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