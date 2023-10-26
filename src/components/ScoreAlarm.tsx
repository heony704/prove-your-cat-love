import { getThemeByScore } from 'src/data/scoreTheme';
import { styled } from 'styled-components';

type ScoreAlarmProps = {
  score: number;
  onClose: () => void;
};

export default function ScoreAlarm({ score, onClose }: ScoreAlarmProps) {
  const { background, point } = getThemeByScore(score);

  return (
    <Card role="alert" $theme={{ background, point }} onAnimationEnd={onClose}>
      <Contents>{score}점 달성 !</Contents>
    </Card>
  );
}

const Card = styled.div<{ $theme: { background: string; point: string } }>`
  position: fixed;
  z-index: 30;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 15rem;
  padding: 1rem;
  border-radius: 0.5rem;
  user-select: none;
  justify-content: center;

  background: ${props => props.$theme.background};
  color: ${props => props.$theme.point};

  opacity: 0;
  animation: fadein 0.7s 2 alternate;
  @keyframes fadein {
    0% {
      opacity: 0;
      margin-top: -30px;
    }

    50%,
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
`;
