const Sequelize = require("sequelize");
const db = require("./../config/db");

const CrewMemberModel = require("./CrewMember");
const MovieModel = require("./Movie");

const CrewMember = CrewMemberModel(db, Sequelize);
const Movie = MovieModel(db, Sequelize);

CrewMember.belongsTo(Movie, {
  foreignKey: "idMovie",
  targetKey: "id",
});

Movie.hasMany(CrewMember, {
  foreignKey: "idMovie",
  targetKey: "id",
});

module.exports = {
  CrewMember,
  Movie,
  connection: db,
};
