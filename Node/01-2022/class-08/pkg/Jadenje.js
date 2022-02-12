const mongoose = require('mongoose');
/**
 * Simplest way of declaring a model for Mongo using Mongoose.
 * The model function accepts two arguments, the name of the collection in the database, and the Schema of every document inside that collection.
 */
const Jadenje = mongoose.model('jadenja', {
  /**
   * _id does NOT need to be specified, it will be created by the DB for every document.
   */
  name: String, // Each element of the schema should have its own corresponding type.
  cuisine: String,
});

module.exports = Jadenje;
