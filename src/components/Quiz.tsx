import { styled } from 'styled-components';
import { getQuizThemeByColor } from 'src/data/quizTheme';
import { HiExclamationCircle } from 'react-icons/hi';
import { QuizProps, Theme, QuizPosition, QuizButtonType } from 'src/types';
import Picture from 'src/components/Picture';

export default function Quiz({
  style,
  image,
  contents,
  yesButtonHandler,
  noButtonHandler,
}: QuizProps) {
  const { position, themeType, buttonType } = style;
  const theme = getQuizThemeByColor(themeType);

  return (
    <Card role="alert" $theme={theme} $position={position}>
      <Title>
        <HiExclamationCircle />
        <h3>QUIZ</h3>
      </Title>
      {image !== undefined && (
        <Picture
          name={image.alt}
          style={{
            width: '100%',
            height: '15rem',
            borderRadius: '0.5rem',
          }}
        />
      )}
      <Contents>{contents}</Contents>
      <ButtonWrapper>
        <QuizButton
          theme={theme}
          buttonType={buttonType}
          onYes={yesButtonHandler}
          onNo={noButtonHandler}
        />
      </ButtonWrapper>
    </Card>
  );
}

type QuizButtonProps = {
  theme: Theme;
  buttonType: QuizButtonType;
  onYes?: () => void;
  onNo?: () => void;
};
type ButtonProps = {
  theme: Theme;
  onClick: () => void;
};

function QuizButton({
  theme,
  buttonType,
  onYes = () => {},
  onNo = () => {},
}: QuizButtonProps) {
  switch (buttonType) {
    case 'one':
      return <YesButton theme={theme} onClick={onYes} />;
    case 'two':
      return (
        <>
          <YesButton theme={theme} onClick={onYes} />
          <NoButton theme={theme} onClick={onNo} />
        </>
      );
    case 'reverse_two':
      return (
        <>
          <NoButton theme={theme} onClick={onNo} />
          <YesButton theme={theme} onClick={onYes} />
        </>
      );
  }
}

function YesButton({ theme, onClick }: ButtonProps): JSX.Element {
  return (
    <YesButtonStyle type="button" $theme={theme} onClick={onClick}>
      맞아요
    </YesButtonStyle>
  );
}
function NoButton({ theme, onClick }: ButtonProps): JSX.Element {
  return (
    <NoButtonStyle type="button" $theme={theme} onClick={onClick}>
      아니요
    </NoButtonStyle>
  );
}

const Card = styled.div<{
  $theme: Theme;
  $position: QuizPosition;
}>`
  position: fixed;
  z-index: 30;
  width: 24rem;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  background: ${props => props.$theme.background};
  color: ${props => props.$theme.point};
  top: ${props => `${props.$position.x}px`};
  left: ${props => `${props.$position.y}px`};
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2rem;
    margin: 0;
  }
`;

const Contents = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.25rem;
  white-space: pre-line;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;

  > button + button {
    margin-left: 1rem;
  }
`;

const YesButtonStyle = styled.button<{ $theme: Theme }>`
  font-weight: 500;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  padding: 0.375rem 1rem;
  text-align: center;
  color: white;
  cursor: pointer;

  border: 2px solid ${props => props.$theme.point};
  background: ${props => props.$theme.point};
  &:hover {
    border: 2px solid ${props => props.$theme.buttonHover};
    background: ${props => props.$theme.buttonHover};
  }
  &:focus {
    outline: 3px solid ${props => props.$theme.focusOutline};
  }
`;

const NoButtonStyle = styled(YesButtonStyle)`
  background: transparent;
  color: ${props => props.$theme.point};

  &:hover {
    color: white;
  }
`;
