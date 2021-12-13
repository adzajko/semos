const User = require('../../../core/User');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const insertUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Cannot create user with these credentials!');
  }

  try {
    await User.create({ username, password });
    return res.status(201).json('Created.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  insertUser,
};
