import React from 'react';
import { styled } from 'styled-components';
import Picture from 'src/components/Picture';

type LifeBoardProps = {
  life: number;
};

function LifeBoard({ life }: LifeBoardProps) {
  const lifeImageName = 'fish';

  const Lives = Array.from({ length: life }, (_, index) => (
    <Picture
      key={index}
      name={lifeImageName}
      defaultFormat="png"
      style={{ width: '6rem' }}
    />
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
