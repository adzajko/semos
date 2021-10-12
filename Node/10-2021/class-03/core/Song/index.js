const SONGS = [
  {
    id: 1,
    title: 'Save your tears',
    artist: 'The Weeknd',
  },
  {
    id: 2,
    title: 'Wind of Change',
    artist: 'Scorpions',
  },
  {
    id: 3,
    title: 'Mercy Mercy Me',
    artist: 'Marvin Gaye',
  },
  {
    id: 4,
    title: 'Starboy',
    artist: 'The Weeknd',
  },
  {
    id: 5,
    title: 'Angie',
    artist: 'The Rolling Stones',
  },
  {
    id: 6,
    title: 'Straight up and Down',
    artist: 'The Brian Jonestown Massacre',
  },
];

const getAllSongs = async () => {
  return SONGS;
};

const addNewSong = async (song) => {
  SONGS.push({
    id: 7,
    title: song.title,
    artist: song.artist,
  });
};

module.exports = {
  getAllSongs,
  addNewSong,
};
