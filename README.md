# <div align=center>고양이 정말 좋아하세요? </div>

<div align=center>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/vite-646CFF?style=flat&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">

</div>

![play](https://github.com/heony704/prove-your-cat-love/assets/36994104/7cf22d5e-26b4-4ba1-af96-0a9cc4942d6a)

고양이 정보랑 고양이 자랑을 담아 만든 퀴즈게임 사이트입니다.  
고양이 애호가라면 쉽게 고득점을 얻을 수 있습니다.  
퀴즈를 세번 틀리거나 퀴즈가 세개 넘게 쌓일 경우 게임이 끝나니 주의하세요.

## 기능

- [x] 랜덤 퀴즈 발생
- [x] 퀴즈가 점점 빠르게 발생
- [x] 특정 점수에 도달할 경우 Toast로 점수 표시
- [x] 퀴즈를 세번 틀리거나 퀴즈가 세개 넘게 쌓일 경우 게임오버
- [x] 게임오버되면 게임결과 표시

## 프로젝트 구조

```js
src
 ┣ assets // 고양이 사진 모음
 ┣ components
 ┃ ┣ Game.tsx // 게임 로직이 동작하는 컴포넌트
 ┃ ┣ GameResult.tsx // 게임 결과를 보여주는 컴포넌트
 ┃ ┣ LifeBoard.tsx // 목숨을 나타내는 컴포넌트
 ┃ ┣ Quiz.tsx // 퀴즈 컴포넌트
 ┃ ┣ QuizButton.tsx // 퀴즈 타입에 따라 다른 버튼들을 반환하는 컴포넌트
 ┃ ┣ ScoreAlarm.tsx // 점수를 알려주는 Toast 컴포넌트
 ┃ ┗ ScoreBoard.tsx // 점수를 나타내는 컴포넌트
 ┣ data
 ┃ ┣ quiz.ts // 퀴즈 내용 모음
 ┃ ┣ quizTheme.ts // Quiz 컴포넌트 스타일 모음
 ┃ ┗ scoreTheme.ts // 점수 별 ScoreAlarm 컴포넌트 스타일
 ┣ hooks
 ┃ ┣ useBooleanState.ts
 ┃ ┣ useDecreasingDelay.ts // 점점 줄어드는 수를 사용하는 훅
 ┃ ┣ useInterval.ts // setInterval을 사용하는 훅 (by Dan abramov)
 ┃ ┣ useIntervalRandomQuiz.tsx // 특정 간격마다 랜덤으로 발생하는 퀴즈를 사용하는 훅
 ┃ ┣ useLife.ts // 목숨을 상태로 사용하는 훅
 ┃ ┣ useQuizzes.ts // Quiz 컴포넌트에 필요한 props들을 배열로 사용하는 훅
 ┃ ┣ useScore.ts // 점수를 상태로 사용하는 훅
 ┃ ┗ useScoreAlarm.tsx // ScoreAlarm을 사용하는 훅
 ┣ pages
 ┃ ┗ MainPage.tsx // 시작 화면
 ┣ types
 ┃ ┗ index.ts // 여러 컴포넌트에서 쓰이는 타입 모음
 ┣ utils
 ┃ ┗ random.ts // 여러 랜덤 값을 반환하는 함수 모음
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

## 신경 쓴 부분

### `useCallback`과 `React.memo`를 이용하여 컴포넌트 리렌더링 최적화

`Game` 컴포넌트 안의 퀴즈 관련 상태가 변하면 life, score 값이 변하지 않더라도 `LifeBaord`, `ScoreBoard` 컴포넌트가 리렌더링되는 문제가 있었습니다.  
`LifeBaord`, `ScoreBoard` 컴포넌트를 `React.memo`로 감싸 life, score 상태가 변하지 않는다면 리렌더링되지 않도록 최적화했습니다.

```ts
import React from 'react';

function LifeBoard({ life }: LifeBoardProps) {
  // ...
  return <Wrapper>{Lives}</Wrapper>;
}

export default React.memo(LifeBoard);
```

`Game` 컴포넌트가 리렌더링될 때 `useIntervalRandomQuiz`, `useScoreAlarm` 훅에서 반환한 컴포넌트 값도 함수이기 때문에 같이 리렌더링되는 문제가 발생했습니다.  
`useIntervalRandomQuiz`, `useScoreAlarm` 훅에서 반환한 컴포넌트(함수)에 `useCallback`을 적용해 dependencies 값이 변경되었을 때만 컴포넌트(함수)를 리렌더링하도록 최적화했습니다.

```ts
import { useCallback } from 'react';

export function useIntervalRandomQuiz() {
  // ...

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
```

## 직접 실행하기

해당 프로젝트를 clone해서 로컬 환경에서 직접 실행할 수 있습니다.

### 1. 프로젝트 복제

```
git clone https://github.com/heony704/prove-your-cat-love.git
cd prove-your-cat-love
```

### 2. 프로젝트에 필요한 라이브러리 설치

```
yarn
```

### 3. 로컬 환경에서 실행

```
yarn dev
```
