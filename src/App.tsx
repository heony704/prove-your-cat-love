import { styled } from 'styled-components';
import ContextProvider from 'src/components/ContextProvider';
import GameStartButton from 'src/components/GameStartButton';
import Game from 'src/components/Game';
import GameResult from 'src/components/GameResult';

export default function App() {
  return (
    <ContextProvider>
      <Title>고양이 정말 좋아하세요?</Title>
      <GameStartButton />
      <Game />
      <GameResult />
    </ContextProvider>
  );
}

const Title = styled.h1`
  font-size: 2.5rem;
  word-break: keep-all;
`;
