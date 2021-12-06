const { model } = require('mongoose');

const Location = model('locations', {
  locationName: { type: String, index: true, unique: true },
  locationAddress: String,
  isOpenCurrently: Boolean,
});

module.exports = Location;
