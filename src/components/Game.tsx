import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';
import { useGameStateStore } from 'src/store/useGameStateStore';
import { useScoreStore } from 'src/store/useScoreStore';

import LifeBoard from 'src/components/LifeBoard';
import ScoreAlarm from 'src/components/ScoreAlarm';
import ScoreBoard from 'src/components/ScoreBoard';

export default function Game() {
  const { life, loseLife } = useLife(3);

  const { endGame } = useGameStateStore();
  const { increaseScore } = useScoreStore();

  // 퀴즈 가속도 설정
  const { delay } = useDecreasingDelay(2500, 500, 25);

  // 랜덤 퀴즈 발생
  const quizHandler = {
    wrongHandler: () => {
      loseLife();
    },
    rightHandler: () => {
      increaseScore();
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
