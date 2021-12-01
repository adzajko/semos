const { model } = require('mongoose');

const Distro = model('distros', {
  name: { type: String, index: true, unique: true },
  pkgManager: String,
  isStable: Boolean,
});

module.exports = Distro;
