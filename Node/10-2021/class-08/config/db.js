const mongoose = require('mongoose');

exports.dbConnector = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

// module.exports = {
//     dbConnector
// }
