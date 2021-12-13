const router = require('express').Router();
const { insertUser, getAllUsers } = require('./handlers/users');

router.get('/', getAllUsers);
router.post('/', insertUser);

router.use('*', (req, res, next) => {
  console.log(req.url);
  return res.status(404).json('Not Found');
});

module.exports = router;
