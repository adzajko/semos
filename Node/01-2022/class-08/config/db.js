const mongoose = require('mongoose');
/**
 * Async function that is used to establish a link from your app to the db.
 * The connect function accepts only one mandatory argument, the connection string to the db.
 */
const dbConnector = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbConnector;
