import TendzereItem from './tendzere-item';

/**
 *
 * @param {Array<any>} props
 * @returns {JSX.Element}
 */
const TendzereList = ({ tendzerinja }) => {
  return (
    <section className='tendzere-container'>
      {/* In order to create a component for every item in the array(passed as props), the .map() function needs to be used. */}
      {tendzerinja.map((tendzere, index) => (
        //   Passing both the object as a prop as well as its index for the required key prop. Key is a prop required by React when mapping through an array
        <TendzereItem tendzere={tendzere} key={index} />
      ))}
    </section>
  );
};

export default TendzereList;
