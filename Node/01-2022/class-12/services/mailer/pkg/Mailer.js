const nodemailer = require('nodemailer');

const initMailer = async ({ receiverAddress, emailContent, subjectLine }) => {
  const testAccount = await nodemailer.createTestAccount();

  const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const mail = await transport.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: receiverAddress,
    subject: subjectLine,
    text: emailContent,
  });

  console.log(mail.response);
};

module.exports = initMailer;
