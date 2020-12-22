/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */
'use strict';

modeule.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define(`Post`, {
    title : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.Text,
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
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false

    }
  });
  return Post;

};

document.getElementById(`Postbtn`).addEventListener(`click`, displayPost);


