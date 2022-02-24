const mongoose = require('mongoose');

const Kafana = mongoose.model('kafani', {
  name: { type: String, index: true },
  location: String,
  isBirtija: Boolean,
});

module.exports = Kafana;
