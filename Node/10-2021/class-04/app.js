const express = require('express');
const cors = require('cors');
const router = require('./routes');
const path = require('path');

const pathToStatic = path.join(__dirname, 'public');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(pathToStatic));
app.use(router);

module.exports = app;
