const router = require('express').Router();
const mailHandler = require('./handlers/mailer');

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + '/mail', mailHandler);

module.exports = router;
