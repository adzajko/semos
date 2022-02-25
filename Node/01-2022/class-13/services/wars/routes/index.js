const router = require('express').Router();
const {
  addNewWar,
  deleteWar,
  editWar,
  getAllWars,
} = require('../handlers/wars');

router.route('/').get(getAllWars).post(addNewWar);
router.route('/:id').put(editWar).delete(deleteWar);
router.use((req, res) =>
  res.status(404).json('War microservice couldnt process request ')
);

module.exports = router;
