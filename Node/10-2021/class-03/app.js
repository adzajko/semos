const express = require('express');
const router = require('./routes');
// Creating an instance of express.
const app = express();

app.use(express.json()); // Part one of old bodyParser library. Required for parsing requests with body.
app.use(express.urlencoded({ extended: false })); // Part two of old bodyParser library. Required for parsing requests with body.
app.use(router);

module.exports = app;
