const Jadenje = require('../pkg/Jadenje');

const getAllJadenja = async (req, res, next) => {
  try {
    const allJadenja = await Jadenje.find();
    return res.status(200).json(allJadenja);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createNewJadenje = async (req, res, next) => {
  const { name, cuisine } = req.body;
  if (!name || !cuisine) {
    return res.status(400).json('Missing data!');
  }

  try {
    await Jadenje.create({ name, cuisine });
    return res.status(201).json('Added new jadenje');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateJadenje = async (req, res, next) => {
  const _id = req.params._id;
  const { name, cuisine } = req.body;

  if (!name || !cuisine) {
    return res.status(400).json('Missing data!');
  }

  try {
    await Jadenje.findByIdAndUpdate(_id, { name, cuisine });
    return res.status(200).json('Updated');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteJadenje = async (req, res, next) => {
  const _id = req.params._id;

  try {
    await Jadenje.findByIdAndDelete(_id);
    return res.status(200).json('Deleted');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllJadenja,
  createNewJadenje,
  updateJadenje,
  deleteJadenje,
};
