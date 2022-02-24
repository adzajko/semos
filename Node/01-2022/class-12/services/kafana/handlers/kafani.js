const Kafana = require('../pkg/Kafana');

const getAllKafani = async (req, res, next) => {
  try {
    const allKafani = await Kafana.find();
    return res.status(200).json(allKafani);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const addNewKafana = async (req, res, next) => {
  const { name, location, isBirtija } = req.body;

  if (!name || !location || isBirtija === undefined) {
    return res.status(400).json('Invalid request');
  }

  try {
    await Kafana.create({ name, location, isBirtija });
    return res.status(201).json('Created');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const editKafana = async (req, res, next) => {
  const { name, location, isBirtija } = req.body;
  const id = req.params.id;

  if (!name || !location || isBirtija === undefined) {
    return res.status(400).json('Invalid request');
  }

  try {
    await Kafana.findByIdAndUpdate(id, { name, location, isBirtija });
    return res.status(200).json('Created');
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteKafana = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Kafana.findByIdAndDelete(id);
    return res.status(200).json('Kafana deleted!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllKafani,
  addNewKafana,
  editKafana,
  deleteKafana,
};
