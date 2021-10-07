/**
 * We first need to import the filesystem and path modules before using them
 */
const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, 'sample.txt');

// fs.writeFile(pathToFile, 'Antonij')
//   .then(() => {
//     console.log('File written!');
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fs.readFile(pathToFile)
//   .then(response => {
//     const fileContents = response.toString();
//     console.log(fileContents);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/**
 * Use this function to write content to any file.
 * @param {string} pathToFile The path to the file with the file name and extension included.
 * @param {string} fileData The contents to be written to the file.
 * @returns {Promise<void>}
 */
const fileWriter = async (pathToFile, fileData) => {
  // The Async Await Syntax comproises of a function thats been declared async
  try {
    await fs.writeFile(pathToFile, fileData); // Use await on asynchronous operations
  } catch (err) {
    console.log(err);
  }
};

/**
 * Use this function to read any file's contents.
 * @param {string} pathToFile The path to the file including the file name and extension.
 * @returns {Promise<string>} The file contents.
 */
const fileReader = async pathToFile => {
  try {
    const bufferResponse = await fs.readFile(pathToFile);
    return bufferResponse.toString();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fileReader,
  fileWriter
};
