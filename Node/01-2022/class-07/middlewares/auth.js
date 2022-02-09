const express = require('express');
/**
 * A Middleware is a function that executes on multiple (or all) incoming requests.
 * It is imperative that both the request and the response are available.
 * Therefore, we can conclude that any function that has access to both the request and the response classifies as a middleware.
 * All middlewares should either pass the request to the next middleware using next() or return a response.
 * @param {express.Request} req The incoming request.
 * @param {express.Response} res The response that needs to be sent.
 * @param {express.NextFunction} next Function used to pass to the next middleware.
 * @returns {express.NextFunction | express.Response} Return type should either be a response or next() to pass to the next middleware.
 */
const authMiddleware = async (req, res, next) => {
  const { password } = req.body;
  if (password !== 'blueberry') {
    return res.status(401).json('You are not logged in!');
  }

  /**
   * Pass the request to the next middleware in the hierarchy.
   */
  return next();
};

module.exports = authMiddleware;
