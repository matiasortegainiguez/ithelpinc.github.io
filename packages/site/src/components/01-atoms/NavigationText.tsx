import { makeStyles, Theme, Typography, TypographyProps } from '@material-ui/core';
import * as React from 'react';
import { LETTER_SPACING } from '../../settings/Variables';
import { ParentProps } from '../01-atoms/ParentProps';

const useStyles = makeStyles((theme: Theme) => ({
  navText: {
    fontWeight: 700,
    fontSize: '.85rem',
    letterSpacing: LETTER_SPACING
  }
}));

export const NavigationText: React.FC<TypographyProps & ParentProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Typography color='primary' className={classes.navText} {...props}>{children}</Typography>
  );
}