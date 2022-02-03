const router = require('express').Router();
const {
  addNewSong,
  getAllSongs,
  updateSong,
  deleteSong,
} = require('../controllers/songs');

router.post('/kafana', addNewSong);
router.get('/kafana', getAllSongs);
router.put('/kafana', updateSong);
router.delete('/kafana', deleteSong);

router.use((req, res) => {
  res.status(404).json('Not Found.');
});

module.exports = router;
