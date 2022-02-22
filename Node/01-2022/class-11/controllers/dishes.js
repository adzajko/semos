const Dish = require('../models/Dish');

const getAllDishes = async (req, res, next) => {
  try {
    const allDishes = await Dish.find();
    return res.status(200).json(allDishes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const addNewDishes = async (req, res, next) => {
  const dishes = req.body;

  if (!dishes || dishes.length < 1) {
    return res.status(400).json('Missing dishes!');
  }

  try {
    await Dish.insertMany(dishes);
    return res.status(201).json('Added new dishes!');
  } catch (error) {
    return res.status(500).json(error);
  }
};
const updateDish = async (req, res, next) => {
  const id = req.params.id;
  const { name, cuisineId, spicyness } = req.body;

  if (!name || !cuisineId || !spicyness) {
    return res.status(400).json('Missing Dish details!');
  }

  try {
    await Dish.findByIdAndUpdate(id, { name, cuisineId, spicyness });
    return res.status(200).json('Updated dish!');
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteDish = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Dish.findByIdAndDelete(id);
    return res.status(200).json('Dish was removed.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getDishesWithCuisines = async (req, res, next) => {
  try {
    const matchingDishes = await Dish.aggregate()
      .lookup({
        from: 'cuisines',
        foreignField: '_id',
        localField: 'cuisineId',
        as: 'cuisineInfo',
      })
      .match({
        spicyness: 'mild',
      })
      .sort({
        name: 1, // -1 - DESCENDING, 1 - ASCENDING
        // spicyness: 1,
      })
      //   .group({
      //     _id: '$spicyness',
      //   })
      .project({
        _id: '$_id',
        dishName: '$name',
        dishSpicyness: '$spicyness',
        cuisineInfo: {
          $first: '$cuisineInfo',
        },
      });

    return res.status(200).json(matchingDishes);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllDishes,
  addNewDishes,
  updateDish,
  deleteDish,
  getDishesWithCuisines,
};
