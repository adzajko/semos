const pets = [
  {
    id: 1,
    species: 'cat',
    name: 'Silvi',
  },
  {
    id: 2,
    species: 'dog',
    name: 'Laki',
  },
];
/**
 * Every single request handler will have the req, res and next arguments passed in.
 * Remember to always return a response!
 * @param {} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const getAllPets = async (req, res, next) => {
  /**
   * Every single response should be returned from the res argument.
   * status() sets the status of the response. Use 2xx for success, 4xx and 5xx for errors.
   * .json() automatically converts whatever is passed in it to a JSON format. Necessary for modern browsers.
   */
  return res.status(200).json(pets);
};

const addNewPet = async (req, res, next) => {
  /**
   * how to extract the body of a request.
   */
  const body = req.body;
  const newPet = {
    id: pets.length + 1,
    species: body.species,
    name: body.name,
  };

  pets.push(newPet);

  return res.status(200).json('Pet was added!');
};

module.exports = {
  getAllPets,
  addNewPet,
};
