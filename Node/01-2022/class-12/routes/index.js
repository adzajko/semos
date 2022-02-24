const router = require('express').Router();
const kafanaRouter = require('../services/kafana');
const mailRouter = require('../services/mailer');
const fileRouter = require('../services/fileuploads');

router.use(fileRouter);
router.use(mailRouter);
router.use(kafanaRouter);
router.use((req, res) => {
  return res.status(404).json('Not Found!');
});

module.exports = router;
