import { styled } from 'styled-components';
import { useGameState } from 'src/hooks/useGameState';
import { useScore } from 'src/hooks/useScore';
import Game from 'src/components/Game';
import GameResult from 'src/components/GameResult';

export default function App() {
  const { gameState, readyGame, startGame, endGame } = useGameState();
  const { score, raiseScore, resetScore } = useScore();

  const onGameResultClose = () => {
    readyGame();
    resetScore();
  };

  return (
    <>
      <Title>고양이 정말 좋아하세요?</Title>
      <StartButton onClick={startGame} disabled={gameState !== 'ready'}>
        증명하기
      </StartButton>
      {gameState === 'playing' && (
        <Game score={score} raiseScore={raiseScore} endGame={endGame} />
      )}
      {gameState === 'over' && (
        <GameResult score={score} onClose={onGameResultClose} />
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 2.5rem;
  word-break: keep-all;
`;

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
