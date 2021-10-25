import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  allDistros: [],
  address: {
    street: 'Partizanska',
  },
};

export const distrosSlice = createSlice({
  name: 'distros',
  initialState: initalState,
  reducers: {
    setAllDistros: (state, action) => {
      state.allDistros = action.payload; // Looks like direct mutation but it isn't!
    },
  },
});

export const { setAllDistros } = distrosSlice.actions;
export const selectDistros = (state) => state.distros.allDistros;

export default distrosSlice.reducer;
