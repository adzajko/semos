const Distro = require('../core/Distro');

const getAllDistros = async (req, res, next) => {
  try {
    const allDistros = await Distro.find();
    return res.status(200).json(allDistros);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findDistroByName = async (req, res, next) => {
  const distroName = req.params.name.toLowerCase();

  try {
    const foundDistro = await Distro.findOne({
      name: distroName,
    });

    if (foundDistro) {
      return res.status(200).json(foundDistro);
    } else {
      return res.status(400).json('Invalid distro name!');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const bulkInsertDistros = async (req, res, next) => {
  const allDistros = req.body.distros;

  if (!allDistros || allDistros.length === 0) {
    return res.status(400).json('Invalid request!');
  }

  try {
    await Distro.insertMany(allDistros);
    return res.status(201).json('Inserted distros.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllDistros,
  findDistroByName,
  bulkInsertDistros,
};
