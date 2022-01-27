const http = require('http');
const path = require('path');
const fsOperations = require('./fileSystem');

const pathToFile = path.join(__dirname, 'random.txt');

fsOperations
  .writeToFile(pathToFile, 'Koj rano rani, cel den zeva')
  .then(() => {
    // console.log('File was written!');
    return fsOperations.readFromFile(pathToFile);
  })
  .then((ukraina) => {
    console.log(ukraina.toString());
  })
  .catch((err) => {
    console.log(err);
  });

const server = http.createServer((request, response) => {
  //   response.statusCode = 200;
  //   response.end();
  //   if (request.url === '/home' && request.method === 'GET') {
  //     //   response.statusCode = 200;
  //     response.writeHead(200, 'You are here!');
  //     response.end();
  //   }

  //   if (request.url === "/home/dashboard" && request.method === "GET") {}
  response.statusCode = 200;
  response.end();
});

server.listen(8080, () => {
  console.log('Server running!');
});
