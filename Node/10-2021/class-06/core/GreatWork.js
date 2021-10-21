const mongoose = require('mongoose');

const GreatWork = mongoose.model('greatworks', {
  title: String,
  createdBy: String,
  description: String,
  yearOfCreation: Date,
  isMissing: Boolean,
});

module.exports = GreatWork;
