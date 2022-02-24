const Mailer = require('../pkg/Mailer');

const sendMail = async (req, res, next) => {
  const { subjectLine, receiverAddress, emailContent } = req.body;

  if (!subjectLine || !receiverAddress || !emailContent) {
    return res.status(400).json('Cannot send invalid email!');
  }

  try {
    await Mailer({ receiverAddress, subjectLine, emailContent });
    return res.status(200).json('Mail sent!');
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = sendMail;
