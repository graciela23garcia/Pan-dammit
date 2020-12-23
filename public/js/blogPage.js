/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define(`Post`, {
    title : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    post_time: {
      type: DataTypes.DATE,
      allowNull: BooleanConstructor,
      validate: {
        len: [1]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false

    }
  });
  return Post;

};

document.getElementById(`Postbtn`).addEventListener(`click`, displayPost);


