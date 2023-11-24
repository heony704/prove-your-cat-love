import React from 'react';
import { styled } from 'styled-components';
import { useScoreStore } from 'src/store/useScoreStore';

function ScoreBoard() {
  const { score } = useScoreStore();

  return <Wrapper>SCORE: {score}</Wrapper>;
}

export default React.memo(ScoreBoard);

const Wrapper = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 20;
  user-select: none;
  display: flex;

  font-size: 1.5rem;
`;
