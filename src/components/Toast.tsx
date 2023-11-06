import { styled } from 'styled-components';

type ToastProps = {
  contents: string;
  style?: {
    background: string;
    point: string;
  };
  onClose: () => void;
};

export default function Toast({ contents, style, onClose }: ToastProps) {
  const background = style?.background ?? '#3f3f46';
  const point = style?.point ?? '#e5e7eb';

  return (
    <Card role="alert" $theme={{ background, point }} onAnimationEnd={onClose}>
      <Contents>{contents}</Contents>
    </Card>
  );
}

const Card = styled.div<{ $theme: { background: string; point: string } }>`
  position: fixed;
  z-index: 40;
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
