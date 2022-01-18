console.log('Zdravo Svetlana');

const numberVariable = 12;
const stringVariable = 'nekoj si tekst';
const booleanVariable = false;
const undefinedVariable = undefined;
const zeroValue = 0;
const nullValue = null;

const niza = [1, 2, false, true, 'jashdash', stringVariable];

const someObject = {
  kakvoSakamIme: booleanVariable,
};

const randomStudent = {
  name: 'Kojcin',
  hometown: 'od Kochista',
  nickname: 'so golemite ochista',
};

const allStudents = [randomStudent];

function oldFunction(argumentOne, argumentTwo) {
  return argumentOne + argumentTwo;
}

const newFunctionExplicit = (argumentOne, argumentTwo) => {
  return argumentOne + argumentTwo;
};

const newFunctionImplicit = (argumentOne, argumentTwo) =>
  argumentOne + argumentTwo;

// console.log(oldFunction(1, '1'));

// console.log(newFunction(1, '1'));

// console.log(niza.map((element) => element + 1));

const arrayOfObjects = [
  {
    name: 'Petko',
    hasCar: false,
  },
  {
    name: 'Rajko',
    hasCar: false,
  },
  {
    name: 'Stojna',
    hasCar: false,
  },
  {
    name: 'Vesemir',
    hasCar: true,
  },
  {
    name: 'Ninoslav',
    hasCar: false,
  },
  {
    name: 'Marija',
    hasCar: true,
  },
  {
    name: 'Martin',
    hasCar: true,
  },
  {
    name: 'Trajce',
    hasCar: false,
  },
  {
    name: 'Stojmir',
    hasCar: false,
  },
  {
    name: 'Trajce',
    hasCar: true,
  },
];

// console.log(arrayOfObjects.find((person) => person.name === 'Trajce'));
/**
 *
 *
 *
 *
 */

console.log(arrayOfObjects.filter((element) => element.hasCar !== false));

niza.find((element) => element === false);
