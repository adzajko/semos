const Movie = require('../models/Movie');

const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByTitle = async (req, res, next) => {
  const title = req.params.title;

  try {
    // const movie = await Movie.findOne({ title });
    // where() Chaining operator
    // gt = greater than
    // gte = greater than equals
    // lt = less than
    // lte = less than equals
    // sort() = sort the query
    // limit() = impose a limit on the final query results.
    const movie = await Movie.find()
      .where('age')
      .lte(21)
      .sort({ age: -1 })
      .limit(15);
    return movie;
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createMovies = async (req, res, next) => {
  const movies = req.body;

  if (!movies || movies.length === 0) {
    return res.status(400).json('Missing data!');
  }

  try {
    await Movie.insertMany(movies);
    return res.status(201).json('Movies added!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateMovie = async (req, res, next) => {
  const id = req.params.id;
  const { title, director, genre, releaseDate, tags } = req.body;

  if (!title || !director || !genre || !releaseDate || !tags) {
    return res.status(400).json('Missing data!');
  }

  try {
    // Updating multiple documents in a collection at once.
    // await Movie.updateMany({genre: "action"}, {})
    await Movie.findByIdAndUpdate(id, {
      title,
      director,
      genre,
      releaseDate,
      tags,
    });
    return res.status(200).json('Movie was updated!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateManyMoves = async (req, res, next) => {
  const movies = req.body;

  if (!movies || movies.length < 0) {
    return res.status(400).json('Missing data');
  }

  try {
    await Movie.updateMany({ releaseDate: '2014' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovie = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Movie.findByIdAndDelete(id);
    // return res.status(200).json('Movie with id:' + id + 'was deleted!')
    return res.status(200).json(`Movie with id: ${id} was deleted!`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieByTitle,
  createMovies,
  updateMovie,
  deleteMovie,
};
