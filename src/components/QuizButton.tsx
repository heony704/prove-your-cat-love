import { styled } from 'styled-components';
import { Theme, QuizButtonType } from 'src/types';

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

export default function QuizButton({
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
