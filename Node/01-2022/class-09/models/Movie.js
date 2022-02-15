const mongoose = require('mongoose');

const Movie = mongoose.model('movies', {
  title: { type: String, index: true, unique: true },
  director: String,
  genre: String,
  releaseDate: Date,
  tags: [String],
});

module.exports = Movie;
