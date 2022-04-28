import * as React from 'react';

export interface SvgImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

export const SvgImage: React.FC<SvgImageProps> = ({ src, ...props }: SvgImageProps) => {
  const Svg = require(`images/${src}`);
  return <img src={Svg} {...props} />;
}