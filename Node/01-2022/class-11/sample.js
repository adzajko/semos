const jadenje = {
  id: 'ajndjksandja',
  name: 'Tavce Gravce',
  cuisine: 'kasdmaskdmas',
};

const jadenje = {
  id: 'jkdansdjkasnd',
  name: 'Sushi',
  cuisine: 'Japanese',
};

const kujna = {
  id: 'kasdmaskdmas',
  name: 'Makedonska',
};

const kujna2 = {
  id: 'daksmdas',
  name: 'Mexican',
};

const innerResult = {
  id: 'kasdmaskdmas',
  name: 'Makedonska',
  jadenja: [jadenje],
};

const leftResult = [
  {
    id: 'ajndjksandja',
    name: 'Tavce Gravce',
    cuisine: 'Makedonska',
    cusineDetails: {
      id: 'kasdmaskdmas',
      name: 'Makedonska',
    },
  },
  {
    id: 'jkdansdjkasnd',
    name: 'Sushi',
    cuisine: 'Japanese',
  },
];
