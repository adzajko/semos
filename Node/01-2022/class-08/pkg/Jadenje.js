const mongoose = require('mongoose');

const Jadenje = mongoose.model('jadenja', {
  name: String,
  cuisine: String,
});

module.exports = Jadenje;
