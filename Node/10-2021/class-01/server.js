const http = require('http');
const fs = require('fs');
const express = require('express');
const myFile = require('./basics');

const server = http.createServer((req, res) => {
  console.log(`Request from ${req.url}`);
  console.log(`Request method used: ${req.method}`);
  //   console.log(myFile.arrowOne(1, 2));
  res.statusCode = 200;
  res.end();
});

server.listen(8080, () => {
  console.log('Hello World!');
});
