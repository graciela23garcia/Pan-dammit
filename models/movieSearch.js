const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const MovieSearch = sequelize.define("MovieSearch", {
    genre: {
      type: DataTypes.STRING,
    },
  });

  return MovieSearch;
};