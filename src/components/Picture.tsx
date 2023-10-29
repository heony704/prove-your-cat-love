import { styled, css } from 'styled-components';
import { getImageSrc } from 'src/utils/getImageSrc';

type PictureStyle = {
  width?: string;
  height?: string;
  borderRadius?: string;
};
type PictureProps = {
  name: string;
  defaultFormat?: 'jpg' | 'png';
  style?: PictureStyle;
};

export default function Picture({
  name,
  defaultFormat = 'jpg',
  style,
}: PictureProps) {
  const ImgSrc = getImageSrc(name);

  return (
    <picture>
      <source srcSet={`${ImgSrc}.webp`} type="image/webp" />
      <Image src={`${ImgSrc}.${defaultFormat}`} alt={name} $style={style} />
    </picture>
  );
}

const Image = styled.img<{ $style?: PictureStyle }>`
  object-fit: cover;

  ${props => {
    if (props.$style?.width)
      return css`
        width: ${props.$style?.width};
      `;
  }};
  ${props => {
    if (props.$style?.height)
      return css`
        height: ${props.$style?.height};
      `;
  }};
  ${props => {
    if (props.$style?.borderRadius)
      return css`
        border-radius: ${props.$style?.borderRadius};
      `;
  }};
`;
