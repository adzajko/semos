import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

const StyledLogin = styled.section`
  & form {
    width: 40%;
    margin: 150px auto 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
    border-radius: 25px;

    & .login-control {
      margin-bottom: 50px;
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledLogin>
      <form onSubmit={handleLoginFormSubmit}>
        <TextField
          variant="outlined"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-control"
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          value={password}
          className="login-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!username || !password}
        >
          Log In
        </Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
