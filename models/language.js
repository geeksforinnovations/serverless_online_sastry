'use strict';
var validator = require('validator');


module.exports = (sequelize, DataTypes) => {
  var Language = sequelize.define('Language', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "name can't be empty."
        }
      }
    },
    
  }, {freezeTableName: true});
  Language.associate = function (models) {
    // associations can be defined here
   Language.hasMany(models.PujaLanguage);
  };
  return Language;
};