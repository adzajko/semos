// Importing the Express Router.
// const router = require('express').Router();
const express = require('express');
const router = express.Router();

// Object destructuring, getting the handler functions
const { getAllSongs, addNewSong } = require('../handlers/songs');

// Passing the handler functions only as a reference, without calling them. It is important to not call them.
router.post('/songs', addNewSong); // C
router.get('/songs', getAllSongs); // R
router.put('/songs'); // U
router.delete('/songs'); // D

module.exports = router;
