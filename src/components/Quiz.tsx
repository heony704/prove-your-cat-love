import { styled } from 'styled-components';
import { getQuizThemeByColor } from 'src/data/quizTheme';
import { HiExclamationCircle } from 'react-icons/hi';
import { QuizProps, Theme, QuizPosition } from 'src/types';

import QuizButton from 'src/components/QuizButton';

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
      {image !== undefined && <Image alt={image.alt} src={image.src} />}
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

const Image = styled.img`
  height: 15rem;
  object-fit: cover;
  border-radius: 0.5rem;
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
