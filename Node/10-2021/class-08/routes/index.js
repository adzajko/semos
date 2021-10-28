const router = require('express').Router();
const { addNewDistro, getDistrosByPkgManager } = require('../handlers/distros');
const { bulkInsertResidents, getResidents } = require('../handlers/residents');

const PREFIX = process.env.PREFIX;

router.route(`${PREFIX}/residents`).get(getResidents).post(bulkInsertResidents);

router
  .route(`${PREFIX}/distros`)
  .get(getDistrosByPkgManager)
  .post(addNewDistro);

router.use('*', (req, res) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
