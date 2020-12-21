'use strict';
const { Sequelize } = require(`sequelize`);

module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define(`Post`, {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_time: Sequelize.DATE
  });

  Post.associate = function(models) {
    // A Post belongs to a User
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
