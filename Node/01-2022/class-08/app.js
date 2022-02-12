const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * CORS is a way of preventing access to your app from outside sources, which renders it
 * semi-useless in modern web apps which are separated by Frontend and backend parts.
 * Therefore, the option to enable CORS is fairly straightforward. First install it using npm,
 * then just pass it as the first middleware in the waterfall.
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;
