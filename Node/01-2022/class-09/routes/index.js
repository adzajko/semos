const router = require('express').Router();
const {
  createMovies,
  deleteMovie,
  getAllMovies,
  getMovieByTitle,
  updateMovie,
} = require('../controllers/movies');

const PREFIX = process.env.API_PREFIX;

router.route(`${PREFIX}/movies`).get(getAllMovies).post(createMovies);

router.route(`${PREFIX}/movies/:id`).delete(deleteMovie).put(updateMovie);

router.get(`${PREFIX}/movies/:title`, getMovieByTitle);

router.use((req, res) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
