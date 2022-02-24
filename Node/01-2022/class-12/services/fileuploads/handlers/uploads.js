const registerFileUpload = async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  return res.status(200).json('File Uploaded!');
};

module.exports = registerFileUpload;
