const { connect } = require('mongoose');

const dbConnector = async () => {
  await connect(process.env.MONGO_URI);
};

module.exports = dbConnector;
