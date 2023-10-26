import { Theme } from 'src/types';

const scoreGrade = [0, 10, 30, 50, 70, 100, 150, 200, 300, 400, 500];

const themes = [
  // black
  {
    background: '#3f3f46',
    point: '#e5e7eb',
    buttonHover: '#52525b',
    focusOutline: '#71717a',
  },
  // black
  {
    background: '#3f3f46',
    point: '#e5e7eb',
    buttonHover: '#52525b',
    focusOutline: '#71717a',
  },
  //navy
  {
    background: '#374151',
    point: '#e5e7eb',
    buttonHover: '#1f2937',
    focusOutline: '#6b7280',
  },
  // iron
  {
    background:
      'linear-gradient(60deg, #655653 0%, #b2928f 20%, #55433e 50%, #655653 70%, #b2928f 100%);',
    point: '#302623',
    buttonHover: 'rgba(101, 86, 83, 0.7)',
    focusOutline: '#d7bdba',
  },
  // bronze
  {
    background:
      'linear-gradient(60deg, #b07d68 0%, #f8ccb3 20%, #a46e4f 50%, #ae7353 70%, #f8ccb3 100%);',
    point: '#503729',
    buttonHover: 'rgba(130, 89, 65, 0.5)',
    focusOutline: '#ffe3d3',
  },
  // silver
  {
    background:
      'linear-gradient(60deg, #8c8c8c 0%, #f6f5f3 20%, #8c8c8c 50%, #959595 70%, #f6f5f3 100%);',
    point: '#444444',
    buttonHover: 'rgba(112, 112, 112, 0.5)',
    focusOutline: '#d4d4d4',
  },
  // gold
  {
    background:
      'linear-gradient(60deg, #de8e13 0%, #f8ef94 20%, #de8e13 50%, #deb644 70%, #f8ef94 100%);',
    point: '#57380a',
    buttonHover: 'rgba(180, 116, 18, 0.5)',
    focusOutline: '#fefc8b',
  },
  // platinum
  {
    background:
      'linear-gradient(60deg, #237682 0%, #4694aa 20%, #365461 50%, #237682 70%, #4694aa 100%);',
    point: '#1f3138',
    buttonHover: 'rgba(35, 118, 130, 0.7)',
    focusOutline: '#69c0d9',
  },
  // emerald
  {
    background:
      'linear-gradient(60deg, #29a766 0%, #1d734e 20%, #066a3c 50%, #29a766 70%, #1d734e 100%);',
    point: '#052e1c',
    buttonHover: 'rgba(6, 83, 48, 0.7)',
    focusOutline: '#3ae78e',
  },
  // diamond
  {
    background:
      'linear-gradient(60deg, #88f0f6 0%, #1d70b0 20%, #3238a5 50%, #88f0f6 70%, #1d70b0 100%);',
    point: '#052e1c',
    buttonHover: 'rgba(29, 112, 176, 0.9)',
    focusOutline: '#4fc3ca',
  },
  // rainbow
  {
    background:
      'linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple)',
    point: '#1F2937',
    buttonHover: 'red',
    focusOutline: 'yellow',
  },
] as Theme[];

const imgs = [
  'sassy_cat',
  'closer_cat',
  'bottom_view',
  'sleeping_cat',
  'flat_cat',
  'two_paws',
  'kitten_in_the_box',
  'catmonite',
  'kitten_under_the_piano',
  'upside_down_cat',
  'parasite_cat',
];

function getScoreGradeIndex(score: number) {
  for (let index = 1; index < scoreGrade.length; index++) {
    if (score < scoreGrade[index]) return index - 1;
  }
  return scoreGrade.length - 1;
}

function getThemeByIndex(index: number) {
  return themes[index];
}

function getImgByIndex(index: number) {
  return imgs[index];
}

export function getThemeByScore(score: number) {
  const gradeIndex = getScoreGradeIndex(score);
  const theme = getThemeByIndex(gradeIndex);
  return theme;
}

export function getStyleByScore(score: number) {
  const gradeIndex = getScoreGradeIndex(score);
  const theme = getThemeByIndex(gradeIndex);
  const img = getImgByIndex(gradeIndex);
  return { theme, img };
}

export function isScoreGrade(score: number) {
  return scoreGrade.includes(score);
}
