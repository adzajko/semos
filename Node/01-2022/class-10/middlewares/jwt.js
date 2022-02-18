const jwt = require('jsonwebtoken');
const express = require('express');

/**
 * A JWT creator function. Pass in the arguments that need to be in the final token.
 * @param {String} username The username from the db.
 * @param {String} id The user id (Should be _id for mongo).
 * @returns {String} The created token.
 */
const createToken = (username, id) => {
  // When creating a token, it is mandatory to pass in the token contents and your secret key.
  // The expiresIn property, while not mandatory, is desired.
  return jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
};

/**
 * The verifier function will decide if the passed string is a valid JWT (both in structure, and that it's not expired).
 * @param {String} token The JWT.
 * @returns {Boolean | Error}
 */
const tokenVerifier = (token) => {
  // Verification depends heavily on your secret key.
  return jwt.verify(token, process.env.JWT_SECRET);
};

/**
 * Custom middleware that evaluates if the headers of a request contain a valid JWT.
 * If an invalid token is provided, this middleware will prevent execution of the other handlers,
 * and return a 401.
 * @param {express.Request} req The inbound request.
 * @param {express.Response} res The response object.
 * @param {express.NextFunction} next The next function, which, when called passes the request to the next middleware in the chain.
 * @returns {express.Response | express.NextFunction}
 */
const authMiddleware = async (req, res, next) => {
  /** JWT is usually handled by the Authorization header. 
   * (Meaning, every request needs to have an Authorization header.)
  The value should be: Authorization: Bearer jwToken
  */
  const auth = req.headers.authorization; // = "Bearer jwtValue"
  if (!auth) {
    return res.status(401).json('Unauthenticated!'); // Return a 401 if no token was supplied.
  }
  /** Using array destructuring, extract the token from the value of the auth header. */
  const [bearer, token] = auth.split(' '); // Empty space MUST be present!

  try {
    /**
     * If the token is verified as valid, the request is passed to the next middleware in the chain.
     */
    tokenVerifier(token);
    return next();
  } catch (error) {
    /**
     * If the token is invalid for whatever reason, request is denied, and a 401 response is returned.
     */
    console.log(error);
    return res.status(401).json('Unauthenticated!');
  }
};

module.exports = {
  createToken,
  tokenVerifier,
  authMiddleware,
};
