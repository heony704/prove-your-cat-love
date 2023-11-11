import { createSlice } from '@reduxjs/toolkit';

type Score = {
  value: number;
};

const initialState: Score = {
  value: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increase: state => {
      state.value = state.value + 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const { increase, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
