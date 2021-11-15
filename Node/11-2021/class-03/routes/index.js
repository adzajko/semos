/**
 * How to import the router from express.
 */
const router = require('express').Router();
// Importing our custom route handlers
const petHandlers = require('../handlers/pets');

/**
 * Registering a GET request on the URL '/pets'
 * Note how the handler function is passed WITHOUT executing it.
 */
router.get('/pets', petHandlers.getAllPets);
/**
 * Registering a POST request on the URL '/pets'
 */
router.post('/pets', petHandlers.addNewPet);

// router.get('/home', async (req, res, next) => {
//   return res.status(200).json('Welcome Home (Sanitarium)');
// });

// router.get('/home2', async (req, res, next) => {});

// router.post('/home', async (req, res, next) => {
//   const requestBody = req.body;
//   console.log(requestBody);
//   return res.status(200).json(requestBody);
// });

// async (req, res, next) => {} -- This is the function used to handle ANY incoming HTTP request.

/**
 * POST - C (create)
 * GET - R (read)
 * PUT - U (update)
 * DELETE - D (delete)
 */

module.exports = router;
