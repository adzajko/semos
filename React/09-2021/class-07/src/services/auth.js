const USERS = [
  {
    username: 'test',
    password: 'lmao',
  },
];

export const loginUser = async (username, password) => {
  const foundUser = USERS.find(
    (user) => user.username === username && user.password === password
  );
  if (!foundUser) {
    throw new Error('Invalid credentials!');
  }
};

export const registerUser = async (username, password) => {
  USERS.push({ username, password });
};

export const logoutUser = async () => {
  return true;
};
