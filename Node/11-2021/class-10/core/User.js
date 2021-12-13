const { model } = require('mongoose');

const User = model('users', {
  username: { unique: true, index: true, type: String },
  password: String,
});

module.exports = User;
