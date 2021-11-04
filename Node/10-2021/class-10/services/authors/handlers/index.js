const Author = require('../../../core/Author');

const getAllAuthors = async (req, res, next) => {
  try {
    const allAuthors = await Author.find();
    return res.status(200).json(allAuthors);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addNewAuthor = async (req, res, next) => {
  const { name, dateOfBirth, isAlive } = req.body;

  if (!name || !dateOfBirth || isAlive === undefined) {
    return res.status(400).json('Invalid request!');
  }

  try {
    // Author author = new Author();
    const newAuthor = new Author({
      name,
      dateOfBirth,
      isAlive,
    });

    await newAuthor.save();

    return res.status(201).json('Author created!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllAuthors,
  addNewAuthor,
};
