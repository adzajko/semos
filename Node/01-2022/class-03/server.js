const http = require('http');
const path = require('path');
const fs = require('fs/promises');
const dotenv = require('dotenv');

const server = http.createServer();

server.listen(8080, () => {
  console.log('Zdravo Svetlano!');
});
