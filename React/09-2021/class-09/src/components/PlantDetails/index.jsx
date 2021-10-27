import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import styled from 'styled-components';
import { v4 } from 'uuid';
import PlantButton from '../StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import { addPlant, editPlant, selectPlants } from '../../redux/plants';

const DetailsContainer = styled.section`
  padding: 50px 150px 0 150px;

  & form {
    display: grid;
    border-radius: 30px;
    box-shadow: 0 0 3px 0 black;
    padding: 2rem;
  }

  & label,
  input {
    display: block;
    width: 100%;
  }

  & .form-control {
    margin: auto;
    margin-bottom: 25px;
    width: 50%;
  }

  & label {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  & input {
    padding: 10px;
    border: none;
    border-bottom: 3px solid var(--app-create);
  }

  & .btn-group {
    margin: 2rem auto;
    display: flex;
    gap: 2rem;
  }
`;

const PlantDetails = () => {
  const { id } = useParams();
  const plants = useSelector(selectPlants);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('');
  const [plantId, setPlantId] = useState('');

  useEffect(() => {
    const foundPlant = plants.find((plant) => plant.id === id);

    if (foundPlant) {
      setName(foundPlant.name);
      setImageUrl(foundPlant.imageUrl);
      setType(foundPlant.type);
      setPlantId(foundPlant.id);
    }
  }, [id]);

  const handleCancelClick = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (plantId) {
      const newPlant = { id: plantId, name, type, imageUrl };
      dispatch(editPlant(newPlant));
    } else {
      const newPlant = { id: v4(), name, type, imageUrl };
      dispatch(addPlant(newPlant));
    }

    history.push('/');
  };

  return (
    <DetailsContainer>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="btn-group">
          <PlantButton
            type="submit"
            color="var(--app-light)"
            bgColor="var(--app-danger)"
          >
            Save
          </PlantButton>
          <PlantButton onClick={handleCancelClick} type="button">
            Cancel
          </PlantButton>
        </div>
      </form>
    </DetailsContainer>
  );
};

export default PlantDetails;
