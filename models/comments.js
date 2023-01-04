'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    
    static associate(models) {
    Comments.belongsTo(models.User, { foreignKey: 'userId'})
    Comments.belongsTo(models.Post, { foreignKey: 'postId'})
    }
  }
  Comments.init({
    commentText: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        models: 'users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  });
  return Comments;
};