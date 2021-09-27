import Greeter from './Greeter'; // const Greeter = require('./Greeter');

function App() {
  // Using the FETCH API below, for making HTTP requests.
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(rawResponse => rawResponse.json()) // IMPORTANT STEP, converting the response into usable data
    .then(finalVersion => {
      console.log(finalVersion.find(comment => comment.id === 29));
    })
    .catch(err => {
      console.log(err);
    });
  // a11y - accessibillity i18n - internationalization
  const someArray = [
    {
      id: 1,
      isTendzere: false,
      isRusted: false
    },
    {
      id: 2,
      isTendzere: true,
      isRusted: false
    },
    {
      id: 3,
      isTendzere: true,
      isRusted: true
    },
    {
      id: 4,
      isTendzere: false,
      isRusted: true
    }
  ];
  const [
    firstTendzere,
    secondTendzere,
    thirdTendzere,
    fourthTendzere
  ] = someArray;
  const findImplementation = someArray.find(
    tendzere => tendzere.isRusted === true
  ); // Find returns the element of the array matching the condition, or undefined
  const mapImplementation = someArray.map(tendzere => ({
    isRusted: tendzere.isRusted
  })); // Map performs an operation on every element in the array (WTHOUT MODIFYING THE ORIGINAL ARRAY)
  const filterImplementaion = someArray.filter(
    tendzere => tendzere.isTendzere === false
  ); // Filter removes elements from the array (WTHOUT MODIFYING THE ORIGINAL ARRAY) based on the condition
  const forEachImplementation = someArray.forEach(tendzere => {
    console.log(tendzere.id);
  });
  return (
    <div className='App'>
      {/* <h1>Hello from H1</h1>
      <p>ldkasldaskol dksalodk;l asmdl kasd l dksalj laksjd la</p> */}
      <Greeter name='Milojko' age='18' />{' '}
      {/** Using Components basic use case. The custom attributes denote props */}
      <Greeter name='Bazho Mehanicaro' age='46' />
      <Greeter name='Silnio' age='11' />
    </div>
  );
}

export default App; // this is equal to module.exports = app;

// export const something = 2; this is equal to module.exports = {something}
