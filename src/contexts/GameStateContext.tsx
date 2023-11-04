import { createContext, useContext, useReducer, Dispatch } from 'react';

type GameState = 'ready' | 'playing' | 'over';
type Action = { type: 'READY' | 'START' | 'END' };
type GameStateDispatch = Dispatch<Action>;

const GameStateContext = createContext<GameState | null>(null);
const GameStateDispatchContext = createContext<GameStateDispatch | null>(null);

type GameStateProviderProps = {
  children: React.ReactNode;
};

export function GameStateProvider({ children }: GameStateProviderProps) {
  const [gameState, dispatch] = useReducer(gameStateReducer, 'ready');

  return (
    <GameStateContext.Provider value={gameState}>
      <GameStateDispatchContext.Provider value={dispatch}>
        {children}
      </GameStateDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const gameState = useContext(GameStateContext);
  if (gameState === null) throw new Error('Game state context is null.');
  return gameState;
}

export function useGameStateDispatch() {
  const gameStateDispatch = useContext(GameStateDispatchContext);
  if (gameStateDispatch === null)
    throw new Error('Game state dispatch context is null.');
  return gameStateDispatch;
}

function gameStateReducer(gameState: GameState, action: Action) {
  switch (action.type) {
    case 'READY': {
      return 'ready';
    }
    case 'START': {
      return 'playing';
    }
    case 'END': {
      return 'over';
    }
  }
}
