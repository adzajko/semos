const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../api-specs.json');
const {
  deleteResident,
  getAllResidents,
  postAllResidents,
  putAllResidents,
} = require('../handlers/residents');

const authMiddleware = require('../middlewares/auth');

const apiPrefix = process.env.API_PREFIX;

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

router.post(apiPrefix + '/residents', authMiddleware, postAllResidents);
router.get(apiPrefix + '/residents', authMiddleware, getAllResidents);
router.put(apiPrefix + '/residents/:boomer', authMiddleware, putAllResidents);
router.delete(apiPrefix + '/residents/:boomer', authMiddleware, deleteResident);

router.use((req, res) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
