import * as React from 'react';
import { SvgImage, SvgImageProps } from './SvgImage';

export const Logo: React.FC<Omit<SvgImageProps, 'src'>> = (props) => {
  return <SvgImage src='logo.svg' {...props} alt='IT Help, INC' />;
}