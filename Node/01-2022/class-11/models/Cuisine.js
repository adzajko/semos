const mongoose = require('mongoose');

const Cuisine = mongoose.model('cuisines', {
  name: String,
  isVegetarian: Boolean,
});

module.exports = Cuisine;
