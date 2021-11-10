const fs = require('fs/promises');
const path = require('path');

// DRY - Don't Repeat Yourself
const pathToFile = path.join(__dirname, 'http.txt');
const pathToWrittenFile = path.join(__dirname, 'newFile.txt');

// fs.readFile(pathToFile)
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fileReader = async () => {
  const data = await fs.readFile(pathToFile);
  console.log(data.toString());
};

const fileWriter = async (contentToBeWritten) => {
  await fs.writeFile(pathToWrittenFile, contentToBeWritten);
};

module.exports = {
  fileReader,
  fileWriter,
};
