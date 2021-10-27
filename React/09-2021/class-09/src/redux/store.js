import { createStore, combineReducers } from 'redux';
import plantState from './plants';
import loginState from './auth';

const rootReducer = combineReducers({
  plantState,
  loginState,
});

const store = createStore(rootReducer);

export default store;
// reDUX = DUCKS
