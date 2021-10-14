require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

console.log(process.env);

server.listen(process.env.PORT, () => {
  console.log('API Running!');
});
