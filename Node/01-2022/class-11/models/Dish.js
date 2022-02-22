const mongoose = require('mongoose');

const Dish = mongoose.model('dishes', {
  name: String,
  cuisineId: mongoose.Types.ObjectId,
  spicyness: String,
});

module.exports = Dish;
