import { styled } from 'styled-components';
import { HiX } from 'react-icons/hi';
import {
  useGameState,
  useGameStateDispatch,
} from 'src/contexts/GameStateContext';
import { useScore, useScoreDispatch } from 'src/contexts/ScoreContext';
import { getStyleByScore } from 'src/data/scoreTheme';
import Picture from 'src/components/Picture';
import { Theme } from 'src/types';

export default function GameResultPresenter() {
  const gameState = useGameState();
  return <>{gameState === 'over' && <GameResult />}</>;
}

function GameResult() {
  const score = useScore();
  const scoreDispatch = useScoreDispatch();
  const resetScore = () => {
    scoreDispatch({ type: 'RESET' });
  };

  const gameStateDispatch = useGameStateDispatch();
  const readyGame = () => {
    gameStateDispatch({ type: 'READY' });
  };

  const { theme, img } = getStyleByScore(score);

  const onClose = () => {
    readyGame();
    resetScore();
  };

  return (
    <Wrapper>
      <Card $theme={theme}>
        <ButtonWrapper>
          <CloseButton type="button" $theme={theme} onClick={onClose}>
            <HiX />
          </CloseButton>
        </ButtonWrapper>
        <Contents>
          <Picture
            name={img}
            style={{
              width: '100%',
              height: '17rem',
              borderRadius: '0.5rem',
            }}
          />
          <Text>{score} 만큼 사랑해</Text>
        </Contents>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 40;
  display: flex;
  user-select: none;
  background: rgba(0, 0, 0, 0.3);
`;

const Card = styled.div<{ $theme: Theme }>`
  width: 28rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  background: ${props => props.$theme.background};
  color: ${props => props.$theme.point};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 0.75rem;
  padding-top: 0.75rem;
`;

const CloseButton = styled.button<{ $theme: Theme }>`
  border-radius: 0.5rem;
  padding: 0.375rem;
  display: flex;
  font-size: 1.25rem;
  cursor: pointer;
  border: 0;
  background: transparent;

  color: ${props => props.$theme.point};
  &:hover {
    background: ${props => props.$theme.buttonHover};
  }
  &:focus {
    outline: 3px solid ${props => props.$theme.focusOutline};
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 2.75rem 1.2rem 2.75rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin: 0.5rem 0;
`;
