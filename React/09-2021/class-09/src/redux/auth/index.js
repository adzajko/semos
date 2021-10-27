const ACTION_TYPES = {
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

const initialState = {
  isLoggedIn: false,
  activeUser: null,
  isLoading: false,
  loginError: null,
};

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_LOGIN: {
      return { ...state, isLoading: true };
    }
    case ACTION_TYPES.LOGGED_IN: {
      return {
        ...state,
        isLoading: false,
        loginError: null,
        activeUser: action.payload,
        isLoggedIn: true,
      };
    }
    case ACTION_TYPES.LOGGED_OUT: {
      return { ...state, activeUser: null, isLoggedIn: false };
    }

    case ACTION_TYPES.LOGIN_ERROR: {
      return {
        ...state,
        activeUser: null,
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export const selectLoginState = (state) => state.loginState;

export const requestLogin = () => {
  return { type: ACTION_TYPES.REQUEST_LOGIN };
};

export const login = (user) => {
  return { type: ACTION_TYPES.LOGGED_IN, payload: user };
};

export const logout = () => {
  return { type: ACTION_TYPES.LOGGED_OUT };
};

export const loginError = (error) => {
  return { type: ACTION_TYPES.LOGIN_ERROR, payload: error };
};

export default loginState;
