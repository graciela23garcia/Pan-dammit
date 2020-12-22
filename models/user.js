'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(`User`, {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 32]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    // Associating User with Posts
    User.hasMany(models.Post, {
      onDelete: `CASCADE`
    });
  };

  return User;
};
