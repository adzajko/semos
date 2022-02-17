const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken } = require('../middlewares/jwt');

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json('Username must be provided!');
  }

  if (!password || password.length < 6) {
    return res.status(400).json('Password must be at least 6 characters');
  }

  try {
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await User.create({ username, password: encryptedPassword });
    return res.status(201).json('User created!');
  } catch (error) {
    return res.status(500).json('User could not be created.');
  }
};

const changePassword = async (req, res, next) => {
  const { username, password } = req.body;

  if (!password || password.length < 6 || !username) {
    return res.status(400).json('Incorrect password!');
  }

  try {
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await User.updateOne(
      { username },
      { username, password: encryptedPassword }
    );
    return res.status(200).json('Changed password!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  const username = req.params.username;

  try {
    await User.findOneAndDelete({ username });
    return res.status(200).json('User deleted!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Invalid credentials!');
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json('User does not exist!');
    }

    await bcrypt.compare(password, user.password);

    const token = createToken(user.username, user._id);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  registerUser,
  changePassword,
  deleteUser,
  login,
};
