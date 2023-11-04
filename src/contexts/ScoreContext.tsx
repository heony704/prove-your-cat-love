import { createContext, useContext, useReducer, Dispatch } from 'react';

type Action = { type: 'RAISE' | 'RESET' };
type ScoreDispatch = Dispatch<Action>;

const ScoreContext = createContext<number | null>(null);
const ScoreDispatchContext = createContext<ScoreDispatch | null>(null);

type ScoreProviderProps = {
  children: React.ReactNode;
};

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, dispatch] = useReducer(scoreReducer, 0);

  return (
    <ScoreContext.Provider value={score}>
      <ScoreDispatchContext.Provider value={dispatch}>
        {children}
      </ScoreDispatchContext.Provider>
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const score = useContext(ScoreContext);
  if (score === null) throw new Error('Score context is null.');
  return score;
}

export function useScoreDispatch() {
  const scoreDispatch = useContext(ScoreDispatchContext);
  if (scoreDispatch === null)
    throw new Error('Score dispatch context is null.');
  return scoreDispatch;
}

function scoreReducer(score: number, action: Action) {
  switch (action.type) {
    case 'RAISE': {
      return score + 1;
    }
    case 'RESET': {
      return 0;
    }
  }
}
