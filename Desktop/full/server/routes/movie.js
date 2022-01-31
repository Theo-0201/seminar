const express = require("express");
const router = express.Router();
const movieController = require("./../controllers").movie;

router.get("/movies", movieController.getAllMovies);
router.post("/postMovie", movieController.postMovie);
router.put("/putMovie", movieController.putMovie);
router.delete("/deleteMovie/:movieId", movieController.deleteMovieWithId);

router.get("/movies/:genree", movieController.filterByGenreeAndDate);
router.get("/orderedMovies", movieController.getAllOrderedMovies);

module.exports = router;
