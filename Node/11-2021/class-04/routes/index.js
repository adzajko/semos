const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const songHandlers = require('../handlers/songs');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

router.get('/songs', songHandlers.getAllSongs);
router.get('/songs/:id', songHandlers.getSongById);

/**
 * 404 Handler, MUST BE DECLARED LAST OF ALL ROUTES!
 */
router.use('*', async (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
