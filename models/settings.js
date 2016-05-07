'use strict';
module.exports = function(sequelize, DataTypes) {
  var Settings = sequelize.define('Settings', {
    param: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Settings;
};