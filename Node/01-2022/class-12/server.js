require('dotenv').config();
const http = require('http');
const app = require('./app');
const dbConnector = require('./config/db');

const server = http.createServer(app);
const PORT = process.env.PORT;

dbConnector()
  .then(() => {
    server.listen(PORT, () => {
      console.log('API Running.');
    });
  })
  .catch((err) => console.log(err));
