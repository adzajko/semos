// This is the name of student variable
const studentName = 'Stojna';

function calculateSum(numberOne, petko) {
  if (numberOne === 1) {
    console.log('Number One was 1');
  } else {
    return numberOne + petko;
  } // 1 == '1'
}

const calculateSumArrow = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

const numberVariable = 8;
const stringVariable = 'kafe';
const booleanVariable = false; // Can only be true OR false
const objectVariable = {
  age: 24,
  isMarried: false,
};

const somethingUndefined;
const nullVal = null;

somethingUndefined.length // Results in error "Cannot read length of undefined"
nullVal.length // Results in error "cannot read length of null"

/**
 *  Truthy values
 * "random", "k"
 * true,
 * 8,
 * any function,
 * any array,
 * any object
 * 
 * 
 * */ 

/**
 * Falsy values
 * "",
 * null,
 * undefined,
 * false
 */

const arrayVariable = [1, 2, false, "random string"];
arrayVariable[0] // = 1;

// arrayVariable.find((element) => {
//     return element === false;
// })

const arrayOfObjects = [
    {
        age: 14,
        name: "Mali Jovica",

    },
    {
        age: 26,
        name: "Viktor",

    }
]

arrayOfObjects.find((trajanka) => {
    return trajanka.age === 14;
})

arrayOfObjects.map((element) => {
    return element.age; // [14, 26]
})

arrayOfObjects.filter((element) => {
    return element.age < 15;
})

arrayOfObjects.forEach((element) => {
    console.log(element);
})

for (let i = 0; i < arrayOfObjects.length; i++) {
    arrayOfObjects[i]
}



const resultOfCalculateSum = calculateSum(45, 'jhhh');
console.log(resultOfCalculateSum);

// console.log(calculateSum(5, 6));
// console.log(calculateSum(12, 98));
// console.log(calculateSumArrow());

// console.log(studentName);
