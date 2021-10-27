import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import PlantItem from '../PlantItem';
import PlantButton from '../StyledButton';

const ListContainer = styled.section`
  padding-top: 50px;
`;

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  row-gap: 100px;
  column-gap: 2rem;
  place-content: center;
  place-items: center;
  height: 100%;
`;
const PlantList = () => {
  const history = useHistory();
  const handleNewPlant = () => {
    history.push('/plants/newplant');
  };

  return (
    <ListContainer>
      <PlantButton
        onClick={handleNewPlant}
        color="var(--app-light)"
        bgColor="var(--app-create)"
        width="30%"
      >
        Add new Plant
      </PlantButton>
      <GridContainer></GridContainer>
    </ListContainer>
  );
};

export default PlantList;
