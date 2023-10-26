import { useState } from 'react';

export function useScore() {
  const [score, setScore] = useState(0);
  const raiseScore = () => {
    setScore(exScore => exScore + 1);
  };
  const resetScore = () => {
    setScore(0);
  };

  return { score, raiseScore, resetScore };
}
