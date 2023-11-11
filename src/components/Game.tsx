import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';
import { useTypedDispatch } from 'src/redux/hooks';
import { end } from 'src/redux/slices/gameState';
import { increase } from 'src/redux/slices/score';

import LifeBoard from 'src/components/LifeBoard';
import ScoreAlarm from 'src/components/ScoreAlarm';
import ScoreBoard from 'src/components/ScoreBoard';

export default function Game() {
  const { life, loseLife } = useLife(3);

  const dispatch = useTypedDispatch();

  // 퀴즈 가속도 설정
  const { delay } = useDecreasingDelay(2500, 500, 25);

  // 랜덤 퀴즈 발생
  const quizHandler = {
    wrongHandler: () => {
      loseLife();
    },
    rightHandler: () => {
      dispatch(increase());
    },
  };
  const { quizzes, Quizzes } = useIntervalRandomQuiz(delay, quizHandler);

  // 퀴즈를 3번 틀리거나 퀴즈가 3개 넘게 쌓일 경우 게임오버
  useEffect(() => {
    if (life < 1 || quizzes.length > 3) dispatch(end());
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
