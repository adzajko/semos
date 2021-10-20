import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import logo from '../../assets/23.svg';
import { Button } from '@mui/material';

const NotFoundContainer = styled.section`
  height: 100%;
  background-image: url(${logo});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  & .container {
    position: absolute;
    top: 10%;
    right: 30%;
  }

  & h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  & .back-btn {
    display: block;
    margin: auto;
  }
`;

const NotFound = () => {
  const history = useHistory();

  const handleNavigation = () => {
    history.push('/');
  };

  return (
    <NotFoundContainer>
      <div className="container">
        <h1>404 Not Found.</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNavigation}
          className="back-btn"
        >
          Go back?
        </Button>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
