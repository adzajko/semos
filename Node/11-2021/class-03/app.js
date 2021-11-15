const express = require('express'); // Import the express library.
const router = require('./routes'); // Import our custom http routing.

/**
 * Before we can use anything from express, we have to create an instance of it.
 * This should be the first step after imports.
 */
const app = express();

/**
 * Body parser middleware, part 1.
 * Grants access to the req.body property.
 */
app.use(express.json());
/**
 * Body parser middleware, part 2.
 * Grants access to the req.body property.
 * These two middlewares are imperative and should be always included.
 */
app.use(express.urlencoded({ extended: false }));
/**
 * Telling our express configuration to use our custom router.
 */
app.use(router);

module.exports = app;
