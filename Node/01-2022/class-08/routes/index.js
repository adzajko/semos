const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../api-specs.json');
const {
  getAllJadenja,
  createNewJadenje,
  updateJadenje,
  deleteJadenje,
} = require('../handlers/jadenja');

const apiPrefix = process.env.API_PREFIX;

router.get(apiPrefix + '/jadenja', getAllJadenja);
router.post(apiPrefix + '/jadenja', createNewJadenje);
router.put(apiPrefix + '/jadenja/:_id', updateJadenje);
router.delete(apiPrefix + '/jadenja/:_id', deleteJadenje);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

module.exports = router;
