'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var PujariLanguages = sequelize.define('PujariLanguages', {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

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
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
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
            defaultValue: sequelize.literal(
                "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
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