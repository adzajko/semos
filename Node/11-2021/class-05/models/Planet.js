let planets = [
  {
    id: 1,
    name: 'Mercury',
    size: 120,
    distanceFromSun: 1200,
  },
];

const getAllPlanets = async () => {
  return planets;
};

const getPlanetById = async (id) => {
  return planets.find((planet) => planet.id === id);
};

const addPlanet = async (newPlanetInfo) => {
  const newPlanet = {
    id: planets.length + 1,
    size: newPlanetInfo.size,
    name: newPlanetInfo.name,
    distanceFromSun: newPlanetInfo.distanceFromSun,
  };

  planets.push(newPlanet);
};

const editPlanet = async (id, newInfo) => {
  planets = planets.map((planet) => {
    if (planet.id === id) {
      return {
        id: id,
        name: newInfo.name,
        size: newInfo.size,
        distanceFromSun: newInfo.distanceFromSun,
      };
    } else {
      return planet;
    }
  });
};

const deletePlanet = async (id) => {
  planets = planets.filter((planet) => planet.id !== id);
};

module.exports = {
  getAllPlanets,
  getPlanetById,
  addPlanet,
  editPlanet,
  deletePlanet,
};
