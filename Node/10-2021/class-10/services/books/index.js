require('dotenv').config();
require('../../config/db');
const app = require('../../config/app');
const router = require('./routes');

const PORT = process.env.BOOKS_PORT;

app.use(router);

app.listen(PORT, () => {
  console.log('Books microservice running!');
});
