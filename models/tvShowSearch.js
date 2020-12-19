'use strict';
// eslint-disable-next-line no-unused-vars
const { Sequelize } = require(`sequelize`);

module.exports = function(sequelize, DataTypes) {
  const TvShowSearch = sequelize.define(`TvShowSearch`, {
    genre: {
      type: DataTypes.STRING
    }
  });

  return TvShowSearch;
};
