const Cuisine = require('../models/Cuisine');

const getAllCuisines = async (req, res, next) => {
  try {
    const allCuisines = await Cuisine.find();
    return res.status(200).json(allCuisines);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const bulkInsertCuisines = async (req, res, next) => {
  const cuisines = req.body;

  if (!cuisines || cuisines.length < 1) {
    return res.status(400).json('Missing cuisines!');
  }

  try {
    await Cuisine.insertMany(cuisines);
    return res.status(201).json('Added cuisines!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateCuisine = async (req, res, next) => {
  const id = req.params.id;
  const { name, isVegetarian } = req.body;

  if (!name || !isVegetarian) {
    return res.status(400).json('Missing cuisine details!');
  }

  try {
    await Cuisine.findByIdAndUpdate(id, { name, isVegetarian });
    return res.status(200).json(`Cuisine ${id} updated!`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCuisine = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Cuisine.findByIdAndDelete(id);
    return res.status(200).json(`Cuisine ${id} was removed.`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllCuisines,
  bulkInsertCuisines,
  updateCuisine,
  deleteCuisine,
};
