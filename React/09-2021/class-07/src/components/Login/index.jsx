import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { useUserContext } from '../../context/auth';
import { useHistory } from 'react-router';
import { isExpired } from 'react-jwt';

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
  const { logInProvider, afterLogin, logOutProvider } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && !isExpired(token)) {
      afterLogin(token);
      history.push('/');
    } else if (isExpired(token)) {
      logOutProvider();
    }
  }, []);

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    logInProvider(username, password).then(() => {
      history.push('/');
    });
    // console.log(context);
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
          label="Password"
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
