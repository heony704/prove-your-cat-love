import { useEffect } from 'react';
import { useLife } from 'src/hooks/useLife';
import { useScore } from 'src/hooks/useScore';
import { useBooleanState } from 'src/hooks/useBooleanState';
import { useIntervalRandomQuiz } from 'src/hooks/useIntervalRandomQuiz';
import { useDecreasingDelay } from 'src/hooks/useDecreasingDelay';
import { useScoreAlarm } from 'src/hooks/useScoreAlarm';

import LifeBoard from 'src/components/LifeBoard';
import GameResult from 'src/components/GameResult';
import ScoreBoard from 'src/components/ScoreBoard';

type GameProps = {
  endGame: () => void;
};

export default function Game({ endGame }: GameProps) {
  const { score, raiseScore, resetScore } = useScore();
  const { life, loseLife } = useLife(3);
  const [isGameOver, gameOver] = useBooleanState(false);

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
      gameOver();
      clearDelay();
    }
  }, [life, quizzes]);

  // 점수 알림
  const { ScoreAlarm } = useScoreAlarm(score);

  // 게임오버 시, 게임 결과 표시
  const onGameResultClose = () => {
    endGame();
    resetScore();
  };
  if (isGameOver) {
    return <GameResult score={score} onClose={onGameResultClose} />;
  }

  return (
    <>
      <ScoreAlarm />
      <ScoreBoard score={score} />
      <LifeBoard life={life} />
      <Quizzes />
    </>
  );
}
