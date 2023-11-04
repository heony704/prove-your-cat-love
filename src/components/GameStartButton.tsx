import { styled } from 'styled-components';
import {
  useGameState,
  useGameStateDispatch,
} from 'src/contexts/GameStateContext';

export default function GameStartButton() {
  const gameState = useGameState();
  const gameStateDispatch = useGameStateDispatch();

  const startGame = () => {
    gameStateDispatch({ type: 'START' });
  };

  return (
    <StartButton onClick={startGame} disabled={gameState !== 'ready'}>
      증명하기
    </StartButton>
  );
}

const StartButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
`;
