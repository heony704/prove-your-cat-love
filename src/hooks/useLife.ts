import { useState } from 'react';

export function useLife(initialLife = 3) {
  const [life, setLife] = useState(initialLife);
  const loseLife = () => {
    setLife(exLife => exLife - 1);
  };

  return { life, loseLife };
}
