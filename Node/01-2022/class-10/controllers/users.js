const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken } = require('../middlewares/jwt');

/**
 * The amount of Salt Rounds the hashing algorithm will use.
 */
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
    /** Simple password encryption. Done using promises. 
     * Accepts two arguments, the string (password), and the amount of SALT_ROUNDS.
      If provided string cannot be hashed, this fn will throw an error.
    */
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    /**
     * ONLY create documents in the DB using hashed password.
     * NEVER use plain text passwords.
     */
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
    // First evaluation, does that user exist.
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json('User does not exist!');
    }

    // Using the compare function of bcrypt, we can compare two strings, a hashed password and a normal password.
    // If the two match, resume execution, otherwise throw an error.
    await bcrypt.compare(password, user.password);

    /**
     * Once all validations have passed (Check if username exists, check if passwords match),
     * create a new JWT and return it as a response.
     * Imperative that you ONLY return a new token on the login request.
     */
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
