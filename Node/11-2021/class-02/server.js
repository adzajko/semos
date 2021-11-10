// We need to import the http module by using the require function, In order to save the value returned, we assign it to a variable.
const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/store') {
    response.statusCode = 200;
    response.end();
  } else if (request.url === '/pets') {
    response.statusCode = 200;
    response.end();
  }
});

server.listen(8080, () => {
  console.log('Zdravo Svetlano!');
});
