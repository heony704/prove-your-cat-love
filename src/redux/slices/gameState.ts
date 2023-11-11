import { createSlice } from '@reduxjs/toolkit';

type GameState = {
  value: 'ready' | 'playing' | 'over';
};

const initialState: GameState = {
  value: 'ready',
};

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    ready: state => {
      state.value = 'ready';
    },
    start: state => {
      state.value = 'playing';
    },
    end: state => {
      state.value = 'over';
    },
  },
});

export const { ready, start, end } = gameStateSlice.actions;

export default gameStateSlice.reducer;
