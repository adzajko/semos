let heroes = [
  {
    id: 1,
    name: 'Jaina Proudmoore',
    homeworld: 'Azeroth',
  },
  {
    id: 2,
    name: 'Alistair',
    homeworld: 'Thedas',
  },
  {
    id: 3,
    name: 'Commander Shepard',
    homeworld: 'Earth',
  },
  {
    id: 4,
    name: 'Tommy Vercetti',
    homeworld: 'Vice City',
  },
  {
    id: 5,
    name: 'Ivan Iscelitel',
    homeworld: 'Staro Nagorichane',
  },
];

// C (create) of CRUD
const addNewHero = async (newHeroInfo) => {
  const newHero = {
    id: heroes.length + 1,
    name: newHeroInfo.name,
    homeworld: newHeroInfo.homeworld,
  };

  heroes.push(newHero);
};

// R (read) of CRUD
const getAllHeroes = async () => {
  return heroes;
};

// U (update) of CRUD
const updateHero = async (argumentId, newInfoForHero) => {
  heroes = heroes.map((hero) => {
    if (hero.id === argumentId) {
      return {
        id: hero.id,
        name: newInfoForHero.name,
        homeworld: newInfoForHero.homeworld,
      };
    } else {
      return hero;
    }
  });
};

// D (delete) of CRUD
const deleteHero = async (targetIdForDeletion) => {
  heroes = heroes.filter((hero) => hero.id !== targetIdForDeletion);
};

module.exports = {
  getAllHeroes,
  addNewHero,
  updateHero,
  deleteHero,
};

// if (someValue) {

// } else {
//     throw new Error()

// }
