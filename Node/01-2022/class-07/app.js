/**
 * We require the import here for both an express instance, as well as access to the static members
 * Static members being the two parts of the body parser middleware.
 */
const express = require('express');
/**
 * Importing our API routing.
 */
const routes = require('./routes');

/**
 * Before we can configure our express instance, one needs to be created.
 */
const app = express();

/**
 * Including three middlewares. All middlewares should be passed using the .use method
 * Middlewares included here will affect the entire app.
 */
app.use(express.json()); // First part of the included body parser middleware
app.use(express.urlencoded({ extended: false })); // Second part of the included body parser middleware.
app.use(routes); // Using our routes. This HAS to be the last middleware used.

module.exports = app;
