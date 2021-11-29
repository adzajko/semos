const router = require('express').Router();
const userHandlers = require('../controllers/users');
const postHandlers = require('../controllers/fbposts');
const { jwtMiddleware } = require('../middlewares/jwt');

const PREFIX = process.env.PREFIX;

router.post(PREFIX + '/login', userHandlers.loginUser);
router.post(PREFIX + '/register', userHandlers.registerUser);

router.get(PREFIX + '/fbposts', jwtMiddleware, postHandlers.getAllPosts);
router.post(PREFIX + '/fbposts', jwtMiddleware, postHandlers.addNewPost);
router.put(PREFIX + '/fbposts/:id', jwtMiddleware, postHandlers.editPost);
router.delete(PREFIX + '/fbposts/:id', jwtMiddleware, postHandlers.deletePost);

router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found');
});

module.exports = router;
