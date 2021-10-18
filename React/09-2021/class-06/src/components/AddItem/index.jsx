import { useState } from 'react';

const AddItem = (props) => {
  const [planetName, setPlanetName] = useState('');
  const [planetType, setPlanetType] = useState('');
  const [distanceFromSun, setDistanceFromSun] = useState('');
  const [yearOfDiscovery, setYearOfDiscovery] = useState('');
  const [planetImg, setPlanetImg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlanet = {
      planetName,
      planetType: 'rocky',
      distanceFromSun: '1.5',
      yearOfDiscovery: 12,
      planetImg: 'iiii',
    };
    props.parentListener(newPlanet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="planetName">Planet Name</label>
        <input
          type="text"
          name="planetName"
          value={planetName}
          onChange={(event) => setPlanetName(event.target.value)}
        />
      </div>
      <button type="submit">Add Planet</button>
    </form>
  );
};

export default AddItem;
