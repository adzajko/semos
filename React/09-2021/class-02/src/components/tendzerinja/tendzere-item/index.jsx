/**
 * Note the object destructuring of the props argument. Equivalent to props.tendzere
 * @param {} props
 * @returns
 */
const TendzereItem = ({ tendzere }) => {
  return (
    <div className='tendzere-item'>
      {/* Using JSX to output variable values. */}
      <img src={tendzere.backgroundImage} alt={tendzere.id} />
    </div>
  );
};

export default TendzereItem;
