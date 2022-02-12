/**
 * As with previous versions of our MVC stuff,
 * The bulk of the work is done by the model itself, meaning the controllers are barely impacted by the addition of a database.
 */
const Jadenje = require('../pkg/Jadenje');

const getAllJadenja = async (req, res, next) => {
  try {
    // All Read or Get operations in the mongoose model usually start with find
    // .find() itself will return every document in the collection.
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
    // Create is the basic way of adding a new document to the collection.
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
    // We want to make sure that the document exists first before updating it.
    // These helpers functions are exceptionally useful.
    await Jadenje.findByIdAndUpdate(_id, { name, cuisine });
    return res.status(200).json('Updated');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteJadenje = async (req, res, next) => {
  const _id = req.params._id;

  try {
    /**
     * As in the update part, first we have to make sure the document exists before attempting deletion.
     */
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
