const mongoose = require('mongoose');

const Tendzere = mongoose.model('tendzerinja', {
  color: String,
});

module.exports = Tendzere;
