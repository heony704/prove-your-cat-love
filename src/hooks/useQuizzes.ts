import { useState } from 'react';
import { QuizWithId } from 'src/types';

/**
 * 퀴즈를 배열로 관리하며 퀴즈 추가 함수를 통해 퀴즈 배열에 쉽게 퀴즈를 추가할 수 있다.
 * @returns 퀴즈 리스트와 퀴즈 추가 함수로 이루어진 객체
 */
export function useQuizzes() {
  const [quizzes, setQuizzes] = useState<QuizWithId[]>([]);

  const endQuiz = (id: number) => {
    setQuizzes(prevQuizzes => prevQuizzes.filter(quiz => quiz.id !== id));
  };

  /**
   * 퀴즈 리스트에 새 퀴즈를 추가한다.
   * @param config 새 퀴즈에 관한 설정 (퀴즈 props, 퀴즈에 대한 id)
   */
  const addQuiz = (config: QuizWithId) => {
    const extraYesButtonHandler = config.yesButtonHandler ?? (() => {});
    const extraNoButtonHandler = config.noButtonHandler ?? (() => {});

    const yesButtonHandler = (id: number) => () => {
      extraYesButtonHandler();
      endQuiz(id);
    };

    const noButtonHandler = (id: number) => () => {
      extraNoButtonHandler();
      endQuiz(id);
    };

    const newQuiz = {
      ...config,
      yesButtonHandler: yesButtonHandler(config.id),
      noButtonHandler: noButtonHandler(config.id),
    };

    setQuizzes(prevQuizzes => [...prevQuizzes, newQuiz]);
  };

  return { quizzes, quiz: addQuiz };
}
