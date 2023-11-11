import { configureStore } from '@reduxjs/toolkit';
import gameStateReducer from 'src/redux/slices/gameState';
import scoreReducer from 'src/redux/slices/score';

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    score: scoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
