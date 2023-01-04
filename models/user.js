'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId'})
      User.hasMany(models.Comments, { foreignKey: 'userId'})
    }
  }
  User.init({
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    email: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};