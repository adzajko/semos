import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import PlantItem from '../PlantItem';
import PlantButton from '../StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlants } from '../../redux/plants';
import { login, selectLoginState } from '../../redux/auth';

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
  const plants = useSelector(selectPlants);
  const { isLoggedIn } = useSelector(selectLoginState);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleNewPlant = () => {
    history.push('/plants/newplant');
  };

  const handleLogin = () => {
    dispatch(login('Roomba'));
  };

  return (
    <ListContainer>
      {isLoggedIn && (
        <PlantButton
          onClick={handleNewPlant}
          color="var(--app-light)"
          bgColor="var(--app-create)"
          width="30%"
        >
          Add new Plant
        </PlantButton>
      )}
      {!isLoggedIn && (
        <PlantButton
          color="var(--app-light)"
          bgColor="var(--app-create)"
          width="30%"
          onClick={handleLogin}
        >
          Log In
        </PlantButton>
      )}
      <GridContainer>
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} />
        ))}
      </GridContainer>
    </ListContainer>
  );
};

export default PlantList;
