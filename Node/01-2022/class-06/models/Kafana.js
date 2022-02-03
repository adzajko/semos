let kafanaSongs = [
  {
    id: 1,
    songTitle: 'Za Liljanu',
    artist: 'Toma Zdravkovic',
  },
];

const addSong = async ({ songTitle, artist }) => {
  const newSong = {
    id: kafanaSongs.length + 1,
    songTitle: songTitle,
    artist: artist,
  };

  kafanaSongs.push(newSong);
};

const getSongs = async () => {
  return kafanaSongs;
};

const editSong = async ({ id, songTitle, artist }) => {
  kafanaSongs = kafanaSongs.map((pesMa) => {
    if (pesMa.id === id) {
      return {
        id: pesMa.id,
        songTitle,
        artist,
      };
    }
    return pesMa;
  });
};

const deleteSong = async (id) => {
  kafanaSongs = kafanaSongs.filter((pesMa) => pesMa.id !== id);
};

module.exports = {
  addSong,
  getSongs,
  editSong,
  deleteSong,
};
