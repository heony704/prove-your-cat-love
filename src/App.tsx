import { useBooleanState } from 'src/hooks/useBooleanState';
import MainPage from 'src/pages/MainPage';
import Game from 'src/components/Game';

export default function App() {
  const [isGaming, startGame, endGame] = useBooleanState(false);

  return (
    <>
      <MainPage isStarted={isGaming} start={startGame} />
      {isGaming && <Game endGame={endGame} />}
    </>
  );
}
