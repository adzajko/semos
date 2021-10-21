const GreatWork = require('../core/GreatWork');

const addNewGreatWork = async (req, res, next) => {
  const { title, createdBy, description, yearOfCreation, isMissing } = req.body;
  if (
    !title ||
    !createdBy ||
    !description ||
    !yearOfCreation ||
    isMissing === undefined
  ) {
    return res.status(400).json('Bad request!');
  }

  try {
    const newGreatWork = await GreatWork.create({
      title,
      createdBy,
      description,
      yearOfCreation,
      isMissing,
    });

    return res.status(201).json(newGreatWork);
  } catch (error) {
    return res.status(500).json(error);
  }
}; // C

const getAllGreatWorks = async (req, res, next) => {
  try {
    const allGreatWorks = await GreatWork.find();
    return res.status(200).json(allGreatWorks);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}; // R

const editGreatWork = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, createdBy, yearOfCreation, isMissing } = req.body;

  if (
    !title ||
    !description ||
    !createdBy ||
    !yearOfCreation ||
    isMissing === undefined
  ) {
    return res.status(400).json('Invalid update request.');
  }

  try {
    // GreatWork.updateOne({ _id: id}, {
    //     title,
    //     description,
    //     createdBy,
    //     yearOfCreation,
    //     isMissing
    // })

    const updated = await GreatWork.findByIdAndUpdate(id, {
      title,
      description,
      createdBy,
      yearOfCreation,
      isMissing,
    });
    return res.status(200).json(updated);
  } catch (err) {
    return res.status(500).json(err);
  }
}; // U

const deleteGreatWork = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deleted = await GreatWork.findByIdAndDelete(id);
    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(500).json(error);
  }
}; // D

module.exports = {
  getAllGreatWorks,
  addNewGreatWork,
  editGreatWork,
  deleteGreatWork,
};
