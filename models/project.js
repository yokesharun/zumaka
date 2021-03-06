'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    project_logo: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};