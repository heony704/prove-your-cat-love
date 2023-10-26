import { Theme } from 'src/types';

const quizTheme = {
  white: {
    background: '#e5e7eb',
    point: '#1f2937',
    buttonHover: '#111827',
    focusOutline: '#9ca3af',
  },
  navy: {
    background: '#1f2937',
    point: '#888e99',
    buttonHover: '#9ca3af',
    focusOutline: '#4b5563',
  },
  black: {
    background: '#27272a',
    point: '#71717a',
    buttonHover: '#3f3f46',
    focusOutline: '#e5e7eb',
  },
  red: {
    background: '#fecaca',
    point: '#991b1b',
    buttonHover: '#7f1d1d',
    focusOutline: '#f87171',
  },
  orange: {
    background: '#fdba74',
    point: '#9a3412',
    buttonHover: '#7c2d12',
    focusOutline: '#f97316',
  },
  amber: {
    background: '#92400e',
    point: '#f59e0b',
    buttonHover: '#d97706',
    focusOutline: '#fcd34d',
  },
  yellow: {
    background: '#fef08a',
    point: '#854d0e',
    buttonHover: '#713f12',
    focusOutline: '#facc15',
  },
  lime: {
    background: '#d9f99d',
    point: '#3f6212',
    buttonHover: '#365314',
    focusOutline: '#a3e635',
  },
  green: {
    background: '#bbf7d0',
    point: '#166534',
    buttonHover: '#14532d',
    focusOutline: '#4ade80',
  },
  emerald: {
    background: '#022c22',
    point: '#059669',
    buttonHover: '#047857',
    focusOutline: '#34d399',
  },
  teal: {
    background: '#99f6e4',
    point: '#115e59',
    buttonHover: '#134e4a',
    focusOutline: '#2dd4bf',
  },
  cyan: {
    background: '#083344',
    point: '#0891b2',
    buttonHover: '#0e7490',
    focusOutline: '#22d3ee',
  },
  sky: {
    background: '#7dd3fc',
    point: '#075985',
    buttonHover: '#0c4a6e',
    focusOutline: '#0ea5e9',
  },
  blue: {
    background: '#bfdbfe',
    point: '#1e40af',
    buttonHover: '#1e3a8a',
    focusOutline: '#60a5fa',
  },
  indigo: {
    background: '#1e1b4b',
    point: '#4f46e5',
    buttonHover: '#4338ca',
    focusOutline: '#818cf8',
  },
  violet: {
    background: '#c4b5fd',
    point: '#5b21b6',
    buttonHover: '#4c1d95',
    focusOutline: '#8b5cf6',
  },
  purple: {
    background: '#3b0764',
    point: '#9333ea',
    buttonHover: '#7e22ce',
    focusOutline: '#c084fc',
  },
  fuchsia: {
    background: '#f5d0fe',
    point: '#86198f',
    buttonHover: '#701a75',
    focusOutline: '#e879f9',
  },
  pink: {
    background: '#500724',
    point: '#db2777',
    buttonHover: '#be185d',
    focusOutline: '#f472b6',
  },
  rose: {
    background: '#fda4af',
    point: '#9f1239',
    buttonHover: '#881337',
    focusOutline: '#f43f5e',
  },
  gold: {
    background:
      'linear-gradient(60deg, #ac780a 0%, #fee56f 14%, #fefc8b 29%, #fdf884 36%, #fae86d 43%, #e19703 47%, #d99003 52%, #a26002 65%, #fcbd45 80%, #5c3001 100%);',
    point: '#1f2937',
    buttonHover: '#ac780a',
    focusOutline: '#fefc8b',
  },
  rainbow: {
    background:
      'linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple)',
    point: '#1f2937',
    buttonHover: 'red',
    focusOutline: 'yellow',
  },
};

export function getQuizThemes() {
  return quizTheme;
}

export function getQuizThemeByColor(color: QuizThemeColors): Theme {
  return quizTheme[color];
}

export function getQuizThemeNames() {
  return Object.keys(quizTheme);
}

export type QuizThemeColors = keyof typeof quizTheme;
