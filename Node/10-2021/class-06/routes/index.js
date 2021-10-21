const router = require('express').Router();
const {
  deleteGreatWork,
  editGreatWork,
  addNewGreatWork,
  getAllGreatWorks,
} = require('../handlers/greatworks');

const PREFIX = process.env.PREFIX;

router
  .route(`${PREFIX}/greatworks`)
  .get(getAllGreatWorks)
  .post(addNewGreatWork);

router
  .route(`${PREFIX}/greatworks/:id`)
  .put(editGreatWork)
  .delete(deleteGreatWork);

router.use('*', (req, res) => {
  return res.status(404).json('Not Found!');
});

module.exports = router;
