const express = require('express');
const path = require('path');

const pathToHome = path.join(__dirname, '..', 'public', 'index.html');
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const serveHomePage = async (req, res, next) => {
  res.status(200).sendFile(pathToHome);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const serveViaEjs = async (req, res, next) => {
  return res.render('home.ejs');
};

module.exports = {
  serveHomePage,
  serveViaEjs,
};
