import { useState } from 'react';

type UseBooleanStateReturn = [boolean, () => void, () => void];

export function useBooleanState(initialState = false): UseBooleanStateReturn {
  const [booleanState, setBooleanState] = useState<boolean>(initialState);
  const setTrue = () => {
    setBooleanState(true);
  };
  const setFalse = () => {
    setBooleanState(false);
  };

  return [booleanState, setTrue, setFalse];
}
