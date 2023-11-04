import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';

import LifeBoard from 'src/components/LifeBoard';
import ScoreAlarm from 'src/components/ScoreAlarm';
import ScoreBoard from 'src/components/ScoreBoard';

type GameProps = {
  score: number;
  raiseScore: () => void;
  endGame: () => void;
};

export default function Game({ score, raiseScore, endGame }: GameProps) {
  const { life, loseLife } = useLife(3);

  // 퀴즈 가속도 설정
  const { delay, clearDelay } = useDecreasingDelay(2500, 500, 25);

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
    if (life < 1 || quizzes.length > 3) {
      endGame();
      clearDelay();
    }
  }, [life, quizzes]);

  return (
    <>
      <ScoreAlarm score={score} />
      <ScoreBoard score={score} />
      <LifeBoard life={life} />
      <Quizzes />
    </>
  );
}
