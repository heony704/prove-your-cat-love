<h1 align=center>[Zustand] 고양이 정말 좋아하세요?</h1>

<div align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-433E38?style=flat&logoColor=white">
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
 ┃ ┣ Game.tsx
 ┃ ┣ GameResult.tsx
 ┃ ┣ LifeBoard.tsx
 ┃ ┣ Picture.tsx
 ┃ ┣ Quiz.tsx
 ┃ ┣ ScoreAlarm.tsx
 ┃ ┣ ScoreBoard.tsx
 ┃ ┗ Toast.tsx
 ┣ data
 ┃ ┣ quiz.ts
 ┃ ┣ quizTheme.ts
 ┃ ┗ scoreTheme.ts
 ┣ hooks
 ┃ ┣ useDecreasingDelay.ts
 ┃ ┣ useInterval.ts
 ┃ ┣ useIntervalRandomQuiz.tsx
 ┃ ┣ useLife.ts
 ┃ ┣ useQuizzes.ts
 ┃ ┗ useToast.tsx
 ┣ store
 ┃ ┣ useGameStateStore.ts // 게임 상태 store
 ┃ ┗ useScoreStore.ts // 게임 점수 store
 ┣ types
 ┃ ┗ index.ts
 ┣ utils
 ┃ ┣ getImageSrc.ts
 ┃ ┗ random.ts
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

## 신경 쓴 부분

## `Zustand`를 적용하여 변수를 전역적으로 관리

주요 컴포넌트인 `Game`, `GameResult` 컴포넌트 모두에서 사용되는 상태들을 Zustand를 통해 store로 관리해 props drilling을 줄였습니다.

```ts
import { create } from 'zustand';

export const useGameStateStore = create<State & Action>(set => ({
  gameState: 'ready',
  readyGame: () => set({ gameState: 'ready' }),
  startGame: () => set({ gameState: 'playing' }),
  endGame: () => set({ gameState: 'over' }),
}));
```

```tsx
import { useGameStateStore } from 'src/store/useGameStateStore';

export default function App() {
  const { gameState, startGame } = useGameStateStore();

  return (
    <>
      <Title>고양이 정말 좋아하세요?</Title>
      <StartButton onClick={startGame} disabled={gameState !== 'ready'}>
        증명하기
      </StartButton>
      {gameState === 'playing' && <Game />}
      {gameState === 'over' && <GameResult />}
    </>
  );
}
```

## 직접 실행하기

해당 프로젝트를 clone해서 로컬 환경에서 직접 실행할 수 있습니다.

### 1. 프로젝트 복제

프로젝트 자체를 복제하고 싶다면 이렇게,

```bash
git clone https://github.com/heony704/prove-your-cat-love.git
cd prove-your-cat-love
```

프로젝트의 해당 브랜치만 복제하고 싶다면 이렇게 해주세요.

```bash
git clone --branch state/zustand https://github.com/heony704/prove-your-cat-love.git
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
