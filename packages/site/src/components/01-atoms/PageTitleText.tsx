import { Typography, TypographyProps } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from './ParentProps';

export const PageTitleText: React.FC<ParentProps & TypographyProps> = ({ children, ...props }) => {
  return <Typography variant='h1' {...props}>{children}</Typography>;
}