import { create } from 'zustand';

type State = {
  gameState: 'ready' | 'playing' | 'over';
};

type Action = {
  readyGame: () => void;
  startGame: () => void;
  endGame: () => void;
};

export const useGameStateStore = create<State & Action>(set => ({
  gameState: 'ready',
  readyGame: () => set({ gameState: 'ready' }),
  startGame: () => set({ gameState: 'playing' }),
  endGame: () => set({ gameState: 'over' }),
}));
