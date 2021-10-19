// const uuid = require('uuid');

// let PLANETS = [
//   {
//     id: uuid.v4(),
//     name: 'Mercury',
//     size: 3402,
//     distanceFromSun: 34222,
//   },
// ];

// const getAllPlanets = async () => {
//   return PLANETS;
// };

// const addNewPlanet = async (planetBody) => {
//   const newPlanet = {
//     id: uuid.v4(),
//     name: planetBody.name,
//     size: planetBody.size,
//     distanceFromSun: planetBody.distanceFromSun,
//   };

//   PLANETS.push(newPlanet);
// };

// const editPlanet = async (planetBody) => {
//   PLANETS = PLANETS.map((planet) => {
//     if (planet.id === planetBody.id) {
//       return planetBody;
//     }

//     return planet;
//   });
// };

// const findPlanetById = async (id) => {
//   const foundPlanet = PLANETS.find((planet) => planet.id === id);
//   return foundPlanet;
// };

// const deletePlanet = async (id) => {
//   PLANETS = PLANETS.filter((planet) => planet.id !== id);
// };

// module.exports = {
//   getAllPlanets,
//   addNewPlanet,
//   findPlanetById,
//   deletePlanet,
//   editPlanet,
// };

const mongoose = require('mongoose');

const Planet = mongoose.model('planets', {
  name: String,
  size: Number,
  distanceFromSun: Number,
});

module.exports = Planet;
