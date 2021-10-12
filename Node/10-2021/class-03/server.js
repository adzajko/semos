const http = require('http');
const app = require('./app');

// const server = http.createServer((request, response) => {
//   if (request.url === '/posts' && request.method === 'GET') {
//   } else if (request.url === '/posts' && request.method === 'POST') {
//   }
// });

// passing the express instance to our createServer so it can handle all the incoming requests.
const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running!');
});
