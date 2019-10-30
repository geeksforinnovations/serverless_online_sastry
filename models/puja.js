'use strict';
module.exports = (sequelize, DataTypes) => {
  const Puja = sequelize.define('Puja', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    about: DataTypes.STRING,
    timeInHrs: DataTypes.FLOAT,
    requiredThings:DataTypes.JSON
  }, {});
  Puja.associate = function(models) {
    // associations can be defined here
  };
  return Puja;
};