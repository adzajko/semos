import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import distrosReducer from '../features/distros/distrosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    distros: distrosReducer,
  },
});
