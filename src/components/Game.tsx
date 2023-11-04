import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';
import { useScoreAlarm } from 'src/hooks/useScoreAlarm';

import LifeBoard from 'src/components/LifeBoard';
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

  // 점수 알림
  const { ScoreAlarm } = useScoreAlarm(score);

  return (
    <>
      <ScoreAlarm />
      <ScoreBoard score={score} />
      <LifeBoard life={life} />
      <Quizzes />
    </>
  );
}
