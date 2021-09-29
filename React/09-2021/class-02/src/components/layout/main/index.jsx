import TendzereList from '../../tendzerinja';
import { Button } from '@mui/material'; // How to import stuff from a third party library

const Main = () => {
  // Defining a function inside a function is both possible and necessary to have good event listeners.
  const handleButtonClick = event => {
    console.log(event);
  };

  const tendzerinja = [
    {
      id: 1,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 2,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 3,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 4,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 5,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 6,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 7,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 8,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    },
    {
      id: 9,
      backgroundImage:
        'https://www.ikea.com/gb/en/images/products/annons-pot-with-lid-glass-stainless-steel__0714768_pe730240_s5.jpg'
    }
  ];

  return (
    <main className='app-main'>
      <h1 className='app-title'>Watermelon Sugar</h1>
      {/* <button className='btn' onClick={handleButtonClick}>
        Click me!
      </button> */}
      {/**Using the MUI Button. Note the variant and color props. */}
      <Button variant='outlined' color='primary' onClick={handleButtonClick}>
        Click me!
      </Button>

      {/* Passing our array as a prop to the list component */}
      <TendzereList tendzerinja={tendzerinja} />
    </main>
  );
};

export default Main;
