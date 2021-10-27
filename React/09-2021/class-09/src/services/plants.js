import { v4 } from 'uuid';

export const PLANTS = [
  {
    id: v4(),
    type: 'vegetable',
    name: 'cucumber',
    imageUrl:
      'https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167',
  },
  {
    id: v4(),
    type: 'fruit',
    name: 'peach',
    imageUrl:
      'https://static.libertyprim.com/files/familles/peche-large.jpg?1574630286',
  },
];
