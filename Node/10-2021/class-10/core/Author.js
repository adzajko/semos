const mongoose = require('mongoose');

const Author = mongoose.model('authors', {
  name: String,
  dateOfBirth: Date,
  isAlive: Boolean,
});

module.exports = Author;
