import React from 'react';
import { styled } from 'styled-components';
import FishImage from 'src/assets/fish.png';

type LifeBoardProps = {
  life: number;
};

function LifeBoard({ life }: LifeBoardProps) {
  const Lives = Array.from({ length: life }, (_, index) => (
    <Image key={index} alt="fish" src={FishImage} />
  ));

  return <Wrapper>{Lives}</Wrapper>;
}

export default React.memo(LifeBoard);

const Wrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  user-select: none;

  display: flex;

  > * + * {
    margin-left: 1rem;
  }
`;

const Image = styled.img`
  width: 6rem;
`;
