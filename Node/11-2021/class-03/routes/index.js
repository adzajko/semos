const router = require('express').Router();

router.get('/home', async (req, res, next) => {
  return res.status(200).json('Welcome Home (Sanitarium)');
});

// router.get('/home2', async (req, res, next) => {});

// router.post('/home', async (req, res, next) => {
//   const requestBody = req.body;
//   console.log(requestBody);
//   return res.status(200).json(requestBody);
// });

// async (req, res, next) => {} -- This is the function used to handle ANY incoming HTTP request.

/**
 * POST - C (create)
 * GET - R (read)
 * PUT - U (update)
 * DELETE - D (delete)
 */

module.exports = router;
