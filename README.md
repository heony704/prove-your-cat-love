<h1 align=center>[Context] 고양이 정말 좋아하세요?</h1>

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
 ┃ ┣ ContextProvider.tsx // Context를 제공하는 컴포넌트
 ┃ ┣ Game.tsx
 ┃ ┣ GameResult.tsx
 ┃ ┣ GameStartButton.tsx
 ┃ ┣ LifeBoard.tsx
 ┃ ┣ Picture.tsx
 ┃ ┣ Quiz.tsx
 ┃ ┣ ScoreAlarm.tsx
 ┃ ┣ ScoreBoard.tsx
 ┃ ┗ Toast.tsx
 ┣ contexts
 ┃ ┣ GameStateContext.tsx // 게임 상태 (ready, playing, over) 컨텍스트
 ┃ ┗ ScoreContext.tsx // 게임 점수 컨텍스트
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

### `useReducer`를 사용해 상태 관련 로직 분리

상태 변경 함수가 2개 이상인 상태는 useReducer를 사용해 상태 관련 로직을 개별 파일로 분리해 유지보수성을 높였습니다.

```tsx
export function GameStateProvider({ children }: GameStateProviderProps) {
  const [gameState, dispatch] = useReducer(gameStateReducer, 'ready');
  // ...
}

function gameStateReducer(gameState: GameState, action: Action) {
  switch (action.type) {
    case 'READY': {
      return 'ready';
    }
    case 'START': {
      return 'playing';
    }
    case 'END': {
      return 'over';
    }
  }
}
```

### `Context API`를 적용하여 변수를 전역적으로 관리

주요 컴포넌트인 `Game`, `GameResult` 컴포넌트 모두에서 사용되는 상태들을 Context API를 통해 전역적으로 관리해 props drilling을 줄였습니다.

상태와 dispatch의 Context를 각각 만들어 Provider로 넘겨주고 필요한 곳에서 사용할 수 있도록 했습니다.

```tsx
const GameStateContext = createContext<GameState | null>(null);
const GameStateDispatchContext = createContext<GameStateDispatch | null>(null);

export function GameStateProvider({ children }: GameStateProviderProps) {
  const [gameState, dispatch] = useReducer(gameStateReducer, 'ready');

  return (
    <GameStateContext.Provider value={gameState}>
      <GameStateDispatchContext.Provider value={dispatch}>
        {children}
      </GameStateDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

// ...
```

Context API 적용에 대한 더 자세한 내용은 [Context API와 useReducer를 사용해서 전역적으로 변수 사용하기](https://heony704.github.io/context/) 포스트에서 확인하실 수 있습니다.

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
git clone --branch state/context https://github.com/heony704/prove-your-cat-love.git
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
