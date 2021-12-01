const router = require('express').Router();
const {
  bulkInsertDistros,
  findDistroByName,
  getAllDistros,
} = require('../handlers/distros');

const {
  bulkInsertUsers,
  getAllUsersAboveAge,
} = require('../handlers/distrousers');

// const distroHandlers = require('../handlers/distros');

const PREFIX = process.env.PREFIX;

router.get(PREFIX + '/distrousers', getAllUsersAboveAge);
router.post(PREFIX + '/distrousers', bulkInsertUsers);

// router.get(PREFIX + "/distros", distroHandlers.getAllDistros);
router.get(PREFIX + '/distros', getAllDistros);
router.get(PREFIX + '/distros/:name', findDistroByName);
router.post(PREFIX + '/distros', bulkInsertDistros);

router.use('*', (req, res, next) => {
  return res.status(404).json('Bad URL.');
});

module.exports = router;
