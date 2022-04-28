import * as React from 'react';
import { SvgImage, SvgImageProps } from './SvgImage';

export const Spinner: React.FC<Omit<SvgImageProps, 'src'>> = (props) => {
  return <SvgImage src='spinner.svg' {...props} alt='Loading, please wait...' />;
}