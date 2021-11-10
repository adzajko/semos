// Both FS and path are native node modules, meaning they are available without installing anything.
const fs = require('fs/promises');
const path = require('path');

// DRY - Don't Repeat Yourself
// The path.join() function is used to create a path to a file or folder regardless of the OS used (Windows, MacOS or Linux)
const pathToFile = path.join(__dirname, 'http.txt');
const pathToWrittenFile = path.join(__dirname, 'newFile.txt');

// fs.readFile(pathToFile)
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Modern wrapper over promises to make them more readable.
 * The function HAS to be declared as async (before the argument block).
 * When declared as async, the await keyword becomes available.
 * Await behaves as a .then() function in a promise, preventing the rest of the code from executing until it recieves a value.
 */
const fileReader = async () => {
  /**
   * fs.readFile is a function from the filesystem module that reads the contents of a file.
   * Only one argument is necessary, the path to the file (construct it using the path module.)
   * To make the data readable, remember to use the .toString() function.
   */
  const data = await fs.readFile(pathToFile);
  console.log(data.toString());
};

/**
 * The fs.writeFile function is used to write contents to a file.
 * If the file doesn't exist, it will be created.
 * It accepts two arguments: the path to the file (construct it using the path module), and the content to be written inside.
 * @param {} contentToBeWritten
 */
const fileWriter = async (contentToBeWritten) => {
  await fs.writeFile(pathToWrittenFile, contentToBeWritten);
};

/**
 * In order for the above functions to be used in other files except this one,
 * they have to be exported using module.exports. Module.exports accepts anything.
 */
module.exports = {
  fileReader,
  fileWriter,
};
