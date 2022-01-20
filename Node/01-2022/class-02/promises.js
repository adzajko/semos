const callbackOne = (callbackArgument) => {
  const something = 5;
  //   callbackArgument(something);
  setTimeout(() => {
    callbackArgument(something);
  }, 3000);
};

const promiseOne = new Promise((resolve, reject) => {
  //   resolve(5);
  reject('Ne te biva brat lol');
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve(10);
});

module.exports = {
  callbackOne,
  promiseOne,
  promiseTwo,
};
