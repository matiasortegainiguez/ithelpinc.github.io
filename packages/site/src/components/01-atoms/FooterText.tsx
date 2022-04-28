import { makeStyles, Theme, Typography, TypographyProps } from '@material-ui/core';
import * as React from 'react';
import { LETTER_SPACING } from '../../settings/Variables';
import { ParentProps } from '../01-atoms/ParentProps';

const useStyles = makeStyles((theme: Theme) => ({
  navText: {
    fontSize: '.85rem',
    color: 'black',
    fontWeight: 400,
    letterSpacing: LETTER_SPACING,
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  }
}));

export const FooterText: React.FC<TypographyProps & ParentProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.navText} {...props}>{children}</Typography>
  );
}