import { QuizThemeColors } from 'src/data/quizTheme';

export type Theme = {
  background: string;
  point: string;
  buttonHover: string;
  focusOutline: string;
};

export type QuizPosition = { x: number; y: number };
export type QuizTheme = QuizThemeColors;
export type QuizButtonType = 'one' | 'two' | 'reverse_two';

export type QuizStyle = {
  style: {
    position: QuizPosition;
    themeType: QuizTheme;
    buttonType: QuizButtonType;
  };
};

type QuizContents = {
  contents: string;
  image?: { alt: string; src: string };
};

export type QuizBase = QuizStyle & QuizContents;
export type QuizProps = QuizBase & {
  yesButtonHandler?: () => void;
  noButtonHandler?: () => void;
};
export type QuizWithId = QuizProps & { id: number };

export type QuizHandler = {
  rightHandler?: () => void;
  wrongHandler?: () => void;
};

export type OnlyChildrenProps = {
  children?: React.ReactNode;
};
