import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import PlantButton from '../StyledButton';

const PlantContainer = styled.article`
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0);

  & .img-container {
    height: auto;
    width: 300px;
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & h3 {
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
  }

  & .btn-group {
    display: flex;
    gap: 1rem;
  }
`;

const PlantItem = ({ plant }) => {
  const history = useHistory();

  const navigateToDetails = () => {
    history.push(`/plants/${plant.id}`);
  };

  const handleDelete = () => {};

  return (
    <PlantContainer>
      <div className="img-container">
        <img src={plant.imageUrl} alt={plant.name} />
      </div>
      <h3>{plant.name}</h3>
      <div className="btn-group">
        <PlantButton
          onClick={navigateToDetails}
          className="edit-btn"
          color="var(--app-dark)"
          bgColor="var(--app-edit)"
        >
          Edit
        </PlantButton>
        <PlantButton
          onClick={handleDelete}
          className="delete-btn"
          color="var(--app-light)"
          bgColor="var(--app-danger)"
        >
          Delete
        </PlantButton>
      </div>
    </PlantContainer>
  );
};

export default PlantItem;
