import { useRef, useCallback } from 'react';
import { useInterval } from 'src/hooks/useInterval';
import { useQuizzes } from './useQuizzes';
import { getRandomQuiz } from 'src/utils/random';
import { QuizHandler } from 'src/types';
import Quiz from 'src/components/Quiz';

/**
 * 특정 간격마다 랜덤 퀴즈를 만든다.
 * @param delay delay만큼의 밀리초가 흘렀을 때마다 랜덤 퀴즈 생성
 * @param handler 퀴즈가 맞거나 틀렸을 때 실행할 함수들
 * @returns 만들어진 퀴즈 리스트
 */
export function useIntervalRandomQuiz(
  delay: number | null,
  handler: QuizHandler,
) {
  const { quizzes, quiz } = useQuizzes();

  const quizId = useRef(0);
  const increaseQuizId = () => {
    quizId.current += 1;
  };

  useInterval(() => {
    const randomQuiz = getRandomQuiz(handler);
    const newQuiz = { id: quizId.current, ...randomQuiz };
    quiz(newQuiz);

    increaseQuizId();
  }, delay);

  const Quizzes = useCallback(() => {
    return (
      <>
        {quizzes.map(quiz => (
          <Quiz key={quiz.id} {...quiz} />
        ))}
      </>
    );
  }, [quizzes]);

  return { quizzes, Quizzes };
}
