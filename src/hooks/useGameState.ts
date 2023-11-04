import { useState } from 'react';

type GameState = 'ready' | 'playing' | 'over';

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>('ready');

  const readyGame = () => {
    setGameState('ready');
  };
  const startGame = () => {
    setGameState('playing');
  };
  const endGame = () => {
    setGameState('over');
  };

  return { gameState, readyGame, startGame, endGame };
}
