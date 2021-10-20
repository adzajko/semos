import { createContext, useContext, useState } from 'react';
import { loginUser, logoutUser } from '../services/auth';
import { toast } from 'react-toastify';
import { decodeToken } from 'react-jwt';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(''); // {username: 'Nekoj', userType: 'administrator'}

  const afterLogin = (token) => {
    const decodedToken = decodeToken(token);
    setActiveUser(decodedToken.name);
    localStorage.setItem('jwt', token);
    toast.success(`Welcome back, ${decodedToken.name}!`);
  };

  const logInProvider = (username, password) => {
    return loginUser(username, password)
      .then((token) => {
        afterLogin(token);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const logOutProvider = () => {
    return logoutUser()
      .then(() => {
        setActiveUser(null);
        localStorage.clear();
        toast.info('You have been signed out!');
      })
      .catch((err) => {
        toast.error('Error signing out!');
      });
  };

  return (
    <UserContext.Provider
      value={{ activeUser, logInProvider, logOutProvider, afterLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
