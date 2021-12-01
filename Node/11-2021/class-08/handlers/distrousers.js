const DistroUser = require('../core/DistroUser');

const getAllUsersAboveAge = async (req, res, next) => {
  const targetAge = +req.query.age;

  if (!targetAge) {
    return res.status(400).json('Age is required!');
  }

  try {
    const matchingUsers = await DistroUser.find()
      .where('age')
      .gt(targetAge)
      .sort({ age: 'desc' })
      .limit(2);
    return res.status(200).json(matchingUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const bulkInsertUsers = async (req, res, next) => {
  const users = req.body.distroUsers;

  if (!users || users.length < 1) {
    return res.status(400).json('Invalid request.');
  }

  try {
    await DistroUser.insertMany(users);
    return res.status(201).json('Inserted users!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllUsersAboveAge,
  bulkInsertUsers,
};
