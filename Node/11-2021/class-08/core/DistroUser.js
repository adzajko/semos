const { model } = require('mongoose');

const DistroUser = model('distrousers', {
  name: String,
  age: Number,
  hasShoweredInLastYear: Boolean,
});

module.exports = DistroUser;
