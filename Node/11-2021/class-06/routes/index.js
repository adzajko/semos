const router = require('express').Router();
const tendzerinjaHandlers = require('../controllers/tendzerinja');
const bodyValidator = require('../middlewares/tendzereValidator');

router.get('/tendzerinja', tendzerinjaHandlers.getAllTendzerinja);
router.post('/tendzerinja', bodyValidator, tendzerinjaHandlers.addNewTendzere);
router.delete('/tendzerinja/:petko', tendzerinjaHandlers.deleteTendzere);
router.put(
  '/tendzerinja/:trendafil',
  bodyValidator,
  tendzerinjaHandlers.updateTendzere
);

router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
