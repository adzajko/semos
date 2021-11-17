const songs = [
  {
    id: 1,
    name: 'Save Your Tears',
    artist: 'The Weeknd',
  },
  {
    id: 2,
    name: 'Fingertips',
    artist: 'The Brian Jonestown Massacre',
  },
];

const getAllSongs = async (req, res, next) => {
  return res.status(200).json(songs);
};

const getSongById = async (req, res, next) => {
  const id = +req.params.id; // is equal to using parseInt()
  const song = songs.find((song) => song.id === id);
  if (song) {
    return res.status(200).json(song);
  } else {
    return res.status(400).json('Song does not exist!');
  }
};

module.exports = {
  getAllSongs,
  getSongById,
};
