const router = require('express').Router();

router.use((req, res) => {
  return res.status(404).json('Not Found!');
});

module.exports = router;
