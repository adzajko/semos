const http = require('http'); // Import the http module so we can create a server.
const app = require('./app'); // Import our express configuration so we can use it as a request listener.

/**
 * Important, remember to pass the express configuration as an argument
 * to the createServer function, so it can replace the default handling of requests.
 */
const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server started.');
});
