const http = require('http');
const path = require('path');
const { fileReader, fileWriter } = require('./fileSystem'); // Object destructuring

const pathToFile = path.join(__dirname, 'myNameIs.txt');

fileWriter(pathToFile, 'Slim Shady').then(() => {
  console.log('File written!');
});

fileReader(pathToFile).then(contents => {
  console.log(contents);
});

const server = http.createServer((req, res) => {});

server.listen(8080, () => {
  console.log('Server running!');
});
