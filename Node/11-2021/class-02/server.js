// We need to import the http module by using the require function, In order to save the value returned, we assign it to a variable.
const http = require('http');
const concatenateStrings = require('./functions');
const fileOperations = require('./promises');

// ./ means current folder
// ../ means one folder above

const server = http.createServer((request, response) => {
  if (request.url === '/store') {
    response.statusCode = 200;
    response.end();
  } else if (request.url === '/pets') {
    response.statusCode = 200;
    response.end();
  }
});

// fileReader().then(() => {});
fileOperations
  .fileWriter('Kucheto Buli, Macheto Maca')
  .then(() => {
    console.log('Wrote to file!');
  })
  .catch((greshka) => {
    console.log(greshka);
  });

server.listen(8080, () => {
  const newString = concatenateStrings('Kapa', 'Pravosmukalka');
  console.log(newString);
});

// S - Separation of Concerns
// O - Open-Shut Principle
// L - Liskov substitution principle
// I - Inversion of Control
// D - Dependency Injection
