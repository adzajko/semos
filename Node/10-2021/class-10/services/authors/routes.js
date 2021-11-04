const router = require('express').Router();
const { addNewAuthor, getAllAuthors } = require('./handlers');
// router.get('/')

router.route('/').post(addNewAuthor).get(getAllAuthors);

router.use('*', (req, res) => {
  return res.status(200).json('Authors Microservice hit!');
});

module.exports = router;
