<h1 align=center>고양이 정말 좋아하세요?</h1>

<div align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
</div>
<br>

<div align=center>
  <img src="https://github.com/heony704/prove-your-cat-love/assets/36994104/6fdef525-9c87-4757-b15b-e002b601245e" width="700">
</div>
<br>

<div align=center>
고양이 정보랑 고양이 자랑을 담아 만든 퀴즈게임 사이트입니다.<br>
고양이 애호가라면 쉽게 고득점을 얻을 수 있습니다.<br>
퀴즈를 세번 틀리거나 퀴즈가 세개 넘게 쌓일 경우 게임이 끝나니 주의하세요.
</div>
<br>

<div align=center>
  <a target="_blank" href="https://prove-your-cat-love.netlify.app">고양이 사랑 테스트하기</a>
</div>

## 기능

- [x] 랜덤 내용, 위치, 스타일의 퀴즈 발생
- [x] 퀴즈가 점점 빠르게 발생
- [x] 특정 점수에 도달할 경우 Toast로 점수 표시
- [x] 퀴즈를 세번 틀리거나 퀴즈가 세개 넘게 쌓일 경우 게임오버
- [x] 게임오버되면 게임결과 표시

## 프로젝트 구조

```c
src
 ┣ components
 ┃ ┣ Game.tsx // 게임 로직이 동작하는 컴포넌트
 ┃ ┣ GameResult.tsx // 게임 결과를 보여주는 컴포넌트
 ┃ ┣ LifeBoard.tsx // 목숨을 나타내는 컴포넌트
 ┃ ┣ Picture.tsx // 이미지를 보여주는 컴포넌트
 ┃ ┣ Quiz.tsx // 퀴즈 컴포넌트
 ┃ ┣ ScoreAlarm.tsx // 점수를 알려주는 토스트 컴포넌트
 ┃ ┣ ScoreBoard.tsx // 점수를 나타내는 컴포넌트
 ┃ ┗ Toast.tsx // 토스트 컴포넌트
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
 ┃ ┗ useToast.tsx // Toast를 사용하는 훅
 ┣ types
 ┃ ┗ index.ts // 여러 컴포넌트에서 쓰이는 타입 모음
 ┣ utils
 ┃ ┣ getImageSrc.ts // 이미지 URL을 반환하는 함수
 ┃ ┗ random.ts // 여러 랜덤 값을 반환하는 함수 모음
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

## 신경 쓴 부분

### `useCallback`과 `React.memo`를 이용하여 컴포넌트 렌더링 최적화

`Game` 컴포넌트 안의 퀴즈 관련 상태가 변하면 life, score 값이 변하지 않더라도 `LifeBaord`, `ScoreBoard`, `ScoreAlarm` 컴포넌트가 리렌더링되는 문제가 있었습니다.  
`LifeBaord`, `ScoreBoard`, `ScoreAlarm` 컴포넌트를 `React.memo`로 감싸 life, score 상태가 변하지 않는다면 리렌더링되지 않도록 최적화했습니다.

```tsx
import React from 'react';

function LifeBoard({ life }: LifeBoardProps) {
  // ...
  return <Wrapper>{Lives}</Wrapper>;
}

export default React.memo(LifeBoard);
```

`Game` 컴포넌트가 리렌더링될 때 `useIntervalRandomQuiz`, `useToast` 훅에서 반환한 컴포넌트 값도 함수이기 때문에 같이 리렌더링되는 문제가 발생했습니다.  
`useIntervalRandomQuiz`, `useToast` 훅에서 반환한 컴포넌트(함수)에 `useCallback`을 적용해 dependencies 값이 변경되었을 때만 컴포넌트(함수)를 리렌더링하도록 최적화했습니다.

```tsx
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

### 이미지 사이즈 최적화

이미지 파일 크기가 커서 로드하는 데 많은 시간이 걸리는 문제가 있어 다음과 같이 최적화했습니다.

- 기존 이미지 파일 크기를 화면에 표시된 너비의 두 배 크기로 줄임

- 압축 효율이 더 좋은 webp 이미지 파일을 만들어 webp 호환 브라우저는 webp 파일을, 그렇지 않은 브라우저는 jpg 혹은 png 파일을 로드
  ```tsx
  export default function Picture() {
    // ...
    return (
      <picture>
        <source srcSet={`${ImgSrc}.webp`} type="image/webp" />
        <img src={`${ImgSrc}.${defaultFormat}`} alt={name} />
      </picture>
    );
  }
  ```

프로젝트에 사용된 총 34개의 이미지 파일의 최적화에 따른 크기 변화입니다.

|             | 파일 크기 | 기존에 비해 감소한 비율 |
| ----------- | --------- | ----------------------- |
| 기존        | 14.3MB    | -                       |
| 사이즈 감소 | 4.9MB     | **66%**                 |
| webp로 변환 | 1.1MB     | **92%**                 |

자세한 내용은 [리액트 이미지 사이즈 최적화](https://heony704.github.io/react-image-size-optimization/) 포스트와 [Pull Request](https://github.com/heony704/prove-your-cat-love/pull/4)에서 확인할 수 있습니다.

### `Context API`, `React Redux`, `Zustand`를 적용하여 변수를 전역적으로 사용

주요 컴포넌트인 `Game`, `GameResult` 컴포넌트 모두에서 사용되는 상태들을 전역적으로 관리하여 props drilling을 줄였습니다.

Context API는 [state/context 브랜치](https://github.com/heony704/prove-your-cat-love/tree/state/context)에서, React Redux는 [state/redux 브랜치](https://github.com/heony704/prove-your-cat-love/tree/state/redux)에서, Zustand는 [state/zustand 브랜치](https://github.com/heony704/prove-your-cat-love/tree/state/zustand) 확인할 수 있습니다.  
기술을 적용한 과정과 기술별 비교는 아래 포스트에 정리했습니다.

- [Context API와 useReducer를 사용해서 전역적으로 변수 사용하기](https://heony704.github.io/context/)
- [React Redux 적용하기](https://heony704.github.io/react-redux/)

## 직접 실행하기

해당 프로젝트를 clone해서 로컬 환경에서 직접 실행할 수 있습니다.

### 1. 프로젝트 복제

```bash
git clone https://github.com/heony704/prove-your-cat-love.git
cd prove-your-cat-love
```

### 2. 프로젝트에 필요한 라이브러리 설치

```bash
yarn
```

### 3. 로컬 환경에서 실행

```bash
yarn dev
```
