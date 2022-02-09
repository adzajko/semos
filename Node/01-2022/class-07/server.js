/**
 * Configuring the dotenv should be the first thing done in the application.
 */
require('dotenv').config();
/**
 * Importing both the native http module and our own custom express configuration.
 */
const http = require('http');
const app = require('./app');

/**
 * Extracting the port information from a .env file.
 * In order for this to work, dotenv needs to be configured first.
 */
const PORT = process.env.PORT;
/**
 * Creating an http server using our express config as a request listener.
 */
const server = http.createServer(app);

/**
 * Starting the server using the port defined in .env
 */
server.listen(PORT, () => {
  console.log('Server Up!');
});
