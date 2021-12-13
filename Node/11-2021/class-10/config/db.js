const { connect } = require('mongoose');

connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Instance connected!');
  })
  .catch((err) => {
    console.log(err);
  });
