const MoviesDB = require("./../models").Movie;
const sequelize = require("sequelize");
const Sequelize = require("sequelize");

const controller = {
  getAllMovies: async (req, res) => {
    MoviesDB.findAll()
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  postMovie: async (req, res) => {
    MoviesDB.create({
      id: req.body.id,
      title: req.body.title,
      category: req.body.category,
      date: req.body.date,
    })
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  putMovie: async (req, res) => {
    MoviesDB.update(
      {
        title: req.body.title,
        category: req.body.category,
        date: req.body.date,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  deleteMovieWithId: async (req, res) => {
    const { movieId } = req.params;
    if (movieId < 0) {
      res.status(400).send({ message: "Movie doesn't exist" });
    }
    MoviesDB.destroy({
      where: {
        id: movieId,
      },
    })
      .then((movies) => {
        res.status(200).send({ message: "Destroyed", movies });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },

  filterByGenreeAndDate: async (req, res) => {
    const Op = Sequelize.Op;
    const { genree } = req.params;
    MoviesDB.findAll({
      where: {
        category: genree,
        date: {
          [Op.gt]: sequelize.fn("NOW"),
        },
      },
    })
      .then((crewMember) => {
        res.status(200).send(crewMember);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },

  getAllOrderedMovies: async (req, res) => {
    MoviesDB.findAll({
      order: [["title", "ASC"]],
    })
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
};

module.exports = controller;
