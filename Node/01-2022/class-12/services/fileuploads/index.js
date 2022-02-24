const router = require('express').Router();
const multer = require('multer');
const fileHandler = require('./handlers/uploads');

const uploadHandler = multer({ dest: 'uploads/' });

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + '/fileupload', uploadHandler.single('fajlo'), fileHandler);

module.exports = router;
