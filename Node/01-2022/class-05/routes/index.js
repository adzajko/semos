const router = require('express').Router();

router.get('/', (req, res) => {
  return res
    .status(200)
    .json('Hello I am Maroun I am under the water please help me');
});

router.post('/login', (req, res) => {
  if (req.body.password) {
    return res.status(200).json('Logged in!');
  }
  return res.status(401).json('Kj ti e pasvordo');
});

router.use((req, res) => {
  return res.status(404).json('Not found brat4e.');
});
module.exports = router;
