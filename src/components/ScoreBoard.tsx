import React from 'react';
import { styled } from 'styled-components';
import { useTypedSelector } from 'src/redux/hooks';

function ScoreBoard() {
  const score = useTypedSelector(state => state.score.value);
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
