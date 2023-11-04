import { GameStateProvider } from 'src/contexts/GameStateContext';
import { ScoreProvider } from 'src/contexts/ScoreContext';

type ContextProviderProps = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <GameStateProvider>
      <ScoreProvider>{children}</ScoreProvider>
    </GameStateProvider>
  );
}
