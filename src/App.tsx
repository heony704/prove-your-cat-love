import { useBooleanState } from 'src/hooks/useBooleanState';
import { styled } from 'styled-components';
import Game from 'src/components/Game';

export default function App() {
  const [isGaming, startGame, endGame] = useBooleanState(false);

  return (
    <>
      <Title>고양이 정말 좋아하세요?</Title>
      <StartButton onClick={startGame} disabled={isGaming}>
        증명하기
      </StartButton>
      {isGaming && <Game endGame={endGame} />}
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
