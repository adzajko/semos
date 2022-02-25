require('dotenv').config();
const app = require('../../config/app');
const { dbConnector } = require('../../config/db');
const routes = require('./routes');

const WARS_PORT = process.env.WARS_PORT;

app.use(routes);

dbConnector()
  .then(() => {
    app.listen(WARS_PORT, () => {
      console.log('Wars microservice up and running!');
    });
  })
  .catch((err) => {
    console.log(err);
  });
