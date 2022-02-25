const War = require('../core/War');

const getAllWars = async (req, res, next) => {
  try {
    const allWars = await War.find();
    return res.status(200).json(allWars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addNewWar = async (req, res, next) => {
  const { warStartDate, warEndDate, isCurrentlyOngoing } = req.body;

  if (!warStartDate || isCurrentlyOngoing === undefined || !warEndDate) {
    return res.status(400).json('Could not add new entry, missing data!');
  }

  try {
    await War.create({ warStartDate, warEndDate, isCurrentlyOngoing });
    return res.status(201).json('New entry added.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const editWar = async (req, res, next) => {
  const { warStartDate, warEndDate, isCurrentlyOngoing } = req.body;
  const id = req.params.id;

  if (!warStartDate || isCurrentlyOngoing === undefined || !warEndDate) {
    return res.status(400).json('Could not add new entry, missing data!');
  }

  try {
    await War.findByIdAndUpdate(id, {
      warStartDate,
      warEndDate,
      isCurrentlyOngoing,
    });
    return res.status(200).json('Entry updated.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteWar = async (req, res, next) => {
  const id = req.params.id;

  try {
    await War.findByIdAndDelete(id);
    return res.status(200).json('Entry deleted.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllWars,
  addNewWar,
  editWar,
  deleteWar,
};
