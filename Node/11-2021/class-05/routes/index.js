const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const planetHandlers = require('../handlers/planets');

router.get('/planets', planetHandlers.getAllPlanets);
router.get('/planets/:id', planetHandlers.getPlanetById);
router.post('/planets', planetHandlers.addNewPlanet);
router.put('/planets/:id', planetHandlers.updatePlanet);
router.delete('/planets/:id', planetHandlers.deletePlanet);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

module.exports = router;
