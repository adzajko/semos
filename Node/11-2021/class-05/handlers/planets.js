let planets = [
  {
    id: 1,
    name: 'Mercury',
    size: 120,
    distanceFromSun: 1200,
  },
];

const getAllPlanets = async (req, res, next) => {
  return res.status(200).json(planets);
};

const getPlanetById = async (req, res, next) => {
  const id = +req.params.id;
  const planet = planets.find((planet) => planet.id === id);
  if (planet) {
    return res.status(200).json(planet);
  } else {
    return res.status(400).json('Planet does not exist!');
  }
};

const addNewPlanet = async (req, res, next) => {
  const planetBody = req.body;

  if (!planetBody.name || !planetBody.size || !planetBody.distanceFromSun) {
    return res.status(400).json('Missing required fields!');
  }

  const newPlanet = {
    id: planets.length + 1,
    size: planetBody.size,
    name: planetBody.name,
    distanceFromSun: planetBody.distanceFromSun,
  };

  planets.push(newPlanet);
  return res.status(200).json('Planet added!');
};

const updatePlanet = async (req, res, next) => {
  const id = +req.params.id;
  const planetBody = req.body;

  if (!planetBody.name || !planetBody.size || !planetBody.distanceFromSun) {
    return res.status(400).json('Missing required fields!');
  }

  planets = planets.map((planet) => {
    if (planet.id === id) {
      return {
        id: id,
        name: planetBody.name,
        size: planetBody.size,
        distanceFromSun: planetBody.distanceFromSun,
      };
    } else {
      return planet;
    }
  });

  return res.status(200).json('Planet edited');
};

const deletePlanet = async (req, res, next) => {
  const id = +req.params.id;
  planets = planets.filter((planet) => planet.id !== id);

  return res.status(200).json('Deleted planet');
};

module.exports = {
  getAllPlanets,
  getPlanetById,
  addNewPlanet,
  updatePlanet,
  deletePlanet,
};
