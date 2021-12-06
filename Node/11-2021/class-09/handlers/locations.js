const Location = require('../core/Location');

const bulkInsertLocations = async (req, res, next) => {
  const locations = req.body;
  if (!locations || locations.length < 1) {
    return res.status(400).json('No Locations!');
  }

  try {
    await Location.insertMany(locations);
    return res.status(201).json('Locations inserted.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  bulkInsertLocations,
};
