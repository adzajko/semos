require('dotenv').config();
const http = require('http');
const app = require('./app');
const dbConnector = require('./config/db');

const PORT = process.env.PORT;
const server = http.createServer(app);

/**
 * Slight alteration to our usual logic, by calling the dbConnector function first,
 * we ensure that the server will only be up and running if the database connection was successful.
 */
dbConnector()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Running!');
    });
  })
  .catch((err) => {
    console.log(err);
  });
