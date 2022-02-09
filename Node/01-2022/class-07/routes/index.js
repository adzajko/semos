/**
 * Import and configuration of the router.
 */
const router = require('express').Router();
/**
 * Import of the swagger ui express library
 */
const swaggerUi = require('swagger-ui-express');
/**
 * Import of the api specs file
 */
const apiSpecs = require('../api-specs.json');
/**
 * Import of the resident handler functions
 */
const {
  deleteResident,
  getAllResidents,
  postAllResidents,
  putAllResidents,
} = require('../handlers/residents');

/**
 * This middleware, when declared here will be executed BEFORE any other request written below it.
 * All middlewares should either release the request using next() or return a response.
 */
const authMiddleware = require('../middlewares/auth');

/**
 * Extracting the api prefix from .env
 * API prefixing is a standard in many modern APIs
 */
const apiPrefix = process.env.API_PREFIX;

/**
 * Two part setup of the swagger UI.
 * Both are mandatory, and the swagger UI will show up on the below link
 */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

/**
 * Custom routes for the resident handlers.
 */
router.post(apiPrefix + '/residents', authMiddleware, postAllResidents);
router.get(apiPrefix + '/residents', authMiddleware, getAllResidents);
router.put(apiPrefix + '/residents/:boomer', authMiddleware, putAllResidents);
router.delete(apiPrefix + '/residents/:boomer', authMiddleware, deleteResident);

/**
 * 404 catch-all handler
 */
router.use((req, res) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
