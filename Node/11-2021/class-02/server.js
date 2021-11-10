// We need to import the http module by using the require function, In order to save the value returned, we assign it to a variable.
const http = require('http');
// We can also use the require function to import our own files.
const concatenateStrings = require('./functions');
// Here we import an object using the require function.
const fileOperations = require('./promises');

// ./ means current folder
// ../ means one folder above

// We use the createServer function located in the above imported http module to create a server. This function does not require ANY arguments.
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

// first we call the function fileWriter located in the fileOperations import above.
fileOperations
  .fileWriter('Kucheto Buli, Macheto Maca') // fileWriter is a PROMISE function, meaning it HAS to be resolved in order to get the result back.
  .then(() => {
    // Use the .then() function to instruct the program what to do if the promise is successful.
    console.log('Wrote to file!'); // .then() accepts a callback function, so the end result should be something like .then(() => {})
  })
  .catch((greshka) => {
    // Use .catch() to instruct the program what to do if the promise is unsucessful
    console.log(greshka); // Just like .then(), .catch() accepts a callback. .catch(() => {})
  });

server.listen(8080, () => {
  // By using the .listen() function we can start our server. It accepts two arguments: the port on our system (a number) and a callback functioin.
  const newString = concatenateStrings('Kapa', 'Pravosmukalka'); // Afterwards, the server will be up on http://localhost:PORT where PORT is the number we passed in as argument.
  console.log(newString);
});

// S - Separation of Concerns
// O - Open-Shut Principle
// L - Liskov substitution principle
// I - Inversion of Control
// D - Dependency Injection
