const primitveNumber = 1;
const primitiveString = 'hahaIksDe';
const primitveBoolean = true;
const nullValue = null;

const arrayOne = [1, 2, 3, false, true, null];

const humanOne = {
  name: 'Petko',
  age: 32,
  isBoomer: false,
  children: ['Ana', 'Ljupka', 'Mitre'],
  address: {
    streetName: 'Partizanska',
    streetNumber: 62
  }
};

function calculateSumOfTwoNumbers(argumentOne, hristifor) {
  return argumentOne * hristifor;
}

const arrowOne = (numOne, numTwo) => numOne + numTwo;

// console.log(calculateSumOfTwoNumbers(105, '16a'));

module.exports = {
  arrowOne,
  calculateSumOfTwoNumbers
};
