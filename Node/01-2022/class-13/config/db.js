const mongoose = require('mongoose');

const dbConnector = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const dbConnectorSQl = async () => {
  await mongoose.connect(process.env.DB_TWO);
};

module.exports = {
  dbConnector,
  dbConnectorSQl,
};
