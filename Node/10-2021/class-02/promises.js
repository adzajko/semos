const callBackFn = argumentCallback => {
  setTimeout(() => {
    argumentCallback(1);
  }, 5000);
};

callBackFn(response => {
  //  console.log(response);
});

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved from promise!');
  }, 6000);
});

// Add operation
newPromise
  .then(response => {
    console.log(response);
    // return na get operation
  })
  .catch(err => {
    console.log(err);
  });
