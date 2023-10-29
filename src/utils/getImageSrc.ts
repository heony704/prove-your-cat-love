const baseSrc =
  'https://raw.githubusercontent.com/heony704/data/main/prove-your-cat-love';

export function getImageSrc(imageName: string) {
  return `${baseSrc}/${imageName}`;
}
