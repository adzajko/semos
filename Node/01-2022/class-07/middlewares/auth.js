const authMiddleware = async (req, res, next) => {
  const { password } = req.body;
  if (password !== 'blueberry') {
    return res.status(401).json('You are not logged in!');
  }

  return next();
};

module.exports = authMiddleware;
