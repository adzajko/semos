const Kafana = require('../models/Song');

const addNewSong = async (req, res) => {
  const { songTitle, artist } = req.body;

  if (!songTitle || !artist) {
    return res.status(400).json('Missing song title or artist!');
  }

  try {
    await Kafana.addSong({ songTitle, artist });
    return res.status(200).json('Added new song!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllSongs = async (req, res) => {
  try {
    const allSongs = await Kafana.getSongs();
    return res.status(200).json(allSongs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateSong = async (req, res) => {
  const { id, songTitle, artist } = req.body;

  if (!id || !songTitle || !artist) {
    return res.status(400).json('Missing request data!');
  }

  try {
    await Kafana.editSong({ id, songTitle, artist });
    return res.status(200).json('Song updated!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteSong = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json('Licna karta prazna je!');
  }

  try {
    await Kafana.deleteSong(id);
    return res.status(200).json('Deleted song');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllSongs,
  addNewSong,
  updateSong,
  deleteSong,
};
