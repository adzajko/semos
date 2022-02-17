const mongoose = require('mongoose');

// Accessing mongo custom types: mongoose.Types

const User = mongoose.model('users', {
  username: { type: String, index: true, unique: true },
  password: String,
});

module.exports = User;
