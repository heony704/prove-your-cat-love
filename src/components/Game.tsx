import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';
import {
  useGameState,
  useGameStateDispatch,
} from 'src/contexts/GameStateContext';
import { useScoreDispatch } from 'src/contexts/ScoreContext';

import LifeBoard from 'src/components/LifeBoard';
import ScoreAlarm from 'src/components/ScoreAlarm';
import ScoreBoard from 'src/components/ScoreBoard';

export default function GamePlayer() {
  const gameState = useGameState();
  return <>{gameState === 'playing' && <Game />}</>;
}

function Game() {
  const { life, loseLife } = useLife(3);

  const gameStateDispatch = useGameStateDispatch();
  const endGame = () => {
    gameStateDispatch({ type: 'END' });
  };

  const scoreDispatch = useScoreDispatch();
  const raiseScore = () => {
    scoreDispatch({ type: 'RAISE' });
  };

  // 퀴즈 가속도 설정
  const { delay } = useDecreasingDelay(2500, 500, 25);

  // 랜덤 퀴즈 발생
  const quizHandler = {
    wrongHandler: () => {
      loseLife();
    },
    rightHandler: () => {
      raiseScore();
    },
  };
  const { quizzes, Quizzes } = useIntervalRandomQuiz(delay, quizHandler);

  // 퀴즈를 3번 틀리거나 퀴즈가 3개 넘게 쌓일 경우 게임오버
  useEffect(() => {
    if (life < 1 || quizzes.length > 3) endGame();
  }, [life, quizzes]);

  return (
    <>
      <ScoreAlarm />
      <ScoreBoard />
      <LifeBoard life={life} />
      <Quizzes />
    </>
  );
}
