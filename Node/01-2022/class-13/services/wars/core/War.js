const mongoose = require('mongoose');

const War = mongoose.model('/wars', {
  warStartDate: Date,
  warEndDate: Date,
  isCurrentlyOngoing: Boolean,
});

module.exports = War;
