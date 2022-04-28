import { Typography } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from './ParentProps';

export interface PlainTitleText extends ParentProps {
  fontSize?: string;
}

export const PlainTitleText: React.FC<PlainTitleText> = ({ fontSize, children }) => {
  const style = fontSize ? { fontSize } : {};
  return <Typography variant='h2' color='primary' style={style}>{children}</Typography>;
}