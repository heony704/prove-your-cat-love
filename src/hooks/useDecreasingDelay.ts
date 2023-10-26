import { useState } from 'react';
import { useInterval } from 'src/hooks/useInterval';

export function useDecreasingDelay(
  initial: number,
  minimum: number,
  interval: number,
) {
  const [delay, setDelay] = useState<number | null>(initial);
  const clearDelay = () => {
    setDelay(null);
  };
  const reduceDelay = (figure: number) => {
    setDelay(exDelay => (exDelay !== null ? exDelay - figure : exDelay));
  };

  useInterval(() => {
    if (delay !== null && delay > minimum) {
      reduceDelay(interval);
    }
  }, delay);

  return { delay, clearDelay };
}
