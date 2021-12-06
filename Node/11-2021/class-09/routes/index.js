const router = require('express').Router();
const { bulkInsertProducts, getAllProducts } = require('../handlers/products');
const { bulkInsertLocations } = require('../handlers/locations');

const PREFIX = process.env.PREFIX;

// router.get(`${PREFIX}/products`)
// router.post(`${PREFIX}/products`)

router.post(`${PREFIX}/locations`, bulkInsertLocations);
router.route(`${PREFIX}/products`).get(getAllProducts).post(bulkInsertProducts);

router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;
