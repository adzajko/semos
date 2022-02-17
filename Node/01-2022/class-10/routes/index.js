const router = require('express').Router();
const {
  changePassword,
  registerUser,
  deleteUser,
  login,
} = require('../controllers/users');
const { authMiddleware } = require('../middlewares/jwt');

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + '/register', registerUser);
router.post(PREFIX + '/login', login);
router.put(PREFIX + '/change-password', authMiddleware, changePassword);
router.delete(PREFIX + '/users/:username', authMiddleware, deleteUser);

router.use((req, res) => {
  return res.status(404).json('Not Found!');
});

module.exports = router;
