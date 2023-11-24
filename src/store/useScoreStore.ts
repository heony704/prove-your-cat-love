import { create } from 'zustand';

type State = {
  score: number;
};

type Action = {
  increaseScore: () => void;
  resetScore: () => void;
};

export const useScoreStore = create<State & Action>(set => ({
  score: 0,
  increaseScore: () => set(state => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));
