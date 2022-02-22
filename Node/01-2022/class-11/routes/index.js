const router = require('express').Router();
const {
  bulkInsertCuisines,
  deleteCuisine,
  getAllCuisines,
  updateCuisine,
} = require('../controllers/cuisines');
const {
  addNewDishes,
  deleteDish,
  getAllDishes,
  updateDish,
  getDishesWithCuisines,
} = require('../controllers/dishes');

const PREFIX = process.env.API_PREFIX;

router
  .route(PREFIX + '/dishes')
  .get(getAllDishes)
  .post(addNewDishes);
router
  .route(PREFIX + '/dishes/:id')
  .put(updateDish)
  .delete(deleteDish);
router
  .route(PREFIX + '/cuisines')
  .get(getAllCuisines)
  .post(bulkInsertCuisines);
router
  .route(PREFIX + '/cuisines/:id')
  .put(updateCuisine)
  .delete(deleteCuisine);

router.get(PREFIX + '/dishescuisines', getDishesWithCuisines);

router.use((req, res) => {
  return res.status(404).json('Not Found!');
});

module.exports = router;
