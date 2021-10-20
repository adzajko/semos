import { getApplicationHeaders } from './applicationHeaders';

const USERS = [
  {
    username: 'Izvorska',
    password: 'plastika',
  },
];

export const loginUser = async (username, password) => {
  const foundUser = USERS.find(
    (user) => user.username === username && user.password === password
  );
  if (!foundUser) {
    throw new Error('Invalid credentials!');
  }

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
};

export const registerUser = async (username, password) => {
  USERS.push({ username, password });
};

export const logoutUser = async () => {
  return true;
};

export const fetchLogin = async (username, password) => {
  const rawResponse = await fetch('http://localhost:8080', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: getApplicationHeaders(),
  });

  const trueResponse = await rawResponse.json();
  return trueResponse;
};
