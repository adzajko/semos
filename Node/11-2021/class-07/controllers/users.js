const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken } = require('../middlewares/jwt');

const loginUser = async (req, res, next) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password) {
    return res.status(400).json('Missing username or password!');
  }

  try {
    const userInDb = await User.findOne({
      username: userInfo.username,
    });

    if (!userInDb) {
      return res.status(400).json('User does not exist!');
    }
    const passwordComparison = await bcrypt.compare(
      userInfo.password,
      userInDb.password
    );

    if (passwordComparison) {
      const newToken = createToken(userInfo.username);
      return res.status(200).json(newToken);
    } else {
      return res.status(401).json('Wrong password!');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const registerUser = async (req, res, next) => {
  const userInfo = req.body;

  if (!userInfo.username || userInfo.username.length < 6) {
    return res.status(400).json('Username too short!');
  }

  if (!userInfo.password || userInfo.password < 6) {
    return res.status(400).json('Password needs to be at least 6 characters!');
  }

  try {
    const existingUser = await User.findOne({
      username: userInfo.username,
    });

    if (existingUser) {
      console.log(existingUser);
      return res.status(409).json('Username already exists!');
    }

    const encryptedPassword = await bcrypt.hash(
      userInfo.password,
      +process.env.SALT_ROUNDS
    );
    const newUser = {
      username: userInfo.username,
      password: encryptedPassword,
    };

    await User.create(newUser);
    return res.status(201).json('User created!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
