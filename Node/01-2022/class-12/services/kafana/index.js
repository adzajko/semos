const router = require('express').Router();
const {
  addNewKafana,
  deleteKafana,
  editKafana,
  getAllKafani,
} = require('./handlers/kafani');

const PREFIX = process.env.API_PREFIX;

router
  .route(PREFIX + '/kafani')
  .get(getAllKafani)
  .post(addNewKafana);
router
  .route(PREFIX + '/kafani/:id')
  .put(editKafana)
  .delete(deleteKafana);

module.exports = router;
