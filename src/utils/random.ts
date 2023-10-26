import { getQuiz } from 'src/data/quiz';
import { getQuizThemeNames } from 'src/data/quizTheme';
import {
  QuizHandler,
  QuizBase,
  QuizProps,
  QuizTheme,
  QuizButtonType,
} from 'src/types';

type RandomQuiz = {
  randomQuiz: QuizBase;
  answer?: boolean;
};

export function getRandomQuiz(handler: QuizHandler): QuizProps {
  const { randomQuiz, answer } = getRandomQuizData();
  const { rightHandler, wrongHandler } = handler;

  const onYes = () => {
    if (answer === false) return wrongHandler;
    return rightHandler;
  };
  const onNo = () => {
    if (answer === false) return rightHandler;
    else if (answer === true) return wrongHandler;
    return undefined;
  };

  const newQuiz = {
    ...randomQuiz,
    yesButtonHandler: onYes(),
    noButtonHandler: onNo(),
  } as QuizProps;

  return newQuiz;
}

function getRandomQuizData(): RandomQuiz {
  const randomQuizData = getRandomFromArray(getQuiz());

  const fontSize = parseInt(
    document.defaultView
      ?.getComputedStyle(document.documentElement)
      .fontSize.replace(/[a-zA-Z]/gi, '') ?? '10',
  );
  const QuizWidth = 26 * fontSize;
  const QuizHeight =
    (randomQuizData.image === undefined ? 11.4 : 23.85) * fontSize;
  const position = {
    x: getRandomInteger(0, window.innerHeight - QuizHeight),
    y: getRandomInteger(0, window.innerWidth - QuizWidth),
  };

  const themeType = getRandomFromArray(getQuizThemeNames()) as QuizTheme;

  const buttonType =
    randomQuizData.buttonNum === 1
      ? 'one'
      : (getRandomFromArray(['two', 'reverse_two']) as QuizButtonType);

  const contents = randomQuizData.contents;

  const image =
    randomQuizData.image === undefined
      ? undefined
      : {
          alt: randomQuizData.image,
          src: `src/assets/${randomQuizData.image}.jpg`,
        };

  const randomQuiz = {
    style: {
      position,
      themeType,
      buttonType,
    },
    contents,
    image,
  };

  const answer = randomQuizData.answer;

  return {
    randomQuiz,
    answer,
  };
}

function getRandomFromArray<T>(array: T[]): T {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
}

function getRandomInteger(min: number, max: number) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
