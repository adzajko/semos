/**
 * The Component Greeter. Note the spelling.
 * @param {*} props The object every attribute is condensed into.
 * @returns {JSX.Element}
 */
const Greeter = ({ name, age }) => {
  return (
    <section>
      <h5>Greeter function called! Hello from {name} </h5>{' '}
      {/** Outputing the value of a variable or function inside JSX is done using curly braces */}
      {/** Curly braces represent delimiters where Javascript code is executed inside JSX*/}
      <p>My age is {age}</p>
    </section>
  );
};

export default Greeter;
