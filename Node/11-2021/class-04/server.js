require('dotenv').config();
const http = require('http');
// const https = require('https')
const app = require('./app');

const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server running! Port: ' + PORT);
});
