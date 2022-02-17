const jwt = require('jsonwebtoken');

const createToken = (username, id) => {
  return jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
};

const tokenVerifier = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const authMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization; // = "Bearer jwtValue"
  if (!auth) {
    return res.status(401).json('Unauthenticated!');
  }
  const [bearer, token] = auth.split(' '); // Empty space MUST be present!

  try {
    tokenVerifier(token);
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json('Unauthenticated!');
  }
};

module.exports = {
  createToken,
  tokenVerifier,
  authMiddleware,
};
