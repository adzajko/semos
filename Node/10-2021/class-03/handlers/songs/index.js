const Song = require('../../core/Song');
const express = require('express');

const getAllSongs = async (request, response, next) => {
  try {
    const allSongs = await Song.getAllSongs();
    return response.status(200).json(allSongs);
  } catch (error) {
    return response.status(500).json(error);
  }
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
const addNewSong = async (request, response, next) => {
  // Extracting the data from the request body. Will not work without the two middlewares for body parsing.
  const song = request.body;
  // Simple validation for falsy values
  if (!song.artist || !song.title || song.artist.length < 2) {
    return response.status(400).json('Error in request!');
  }

  try {
    await Song.addNewSong({ title: song.title, artist: song.artist });
    return response.status(201).json('Song added!');
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  getAllSongs,
  addNewSong,
};
