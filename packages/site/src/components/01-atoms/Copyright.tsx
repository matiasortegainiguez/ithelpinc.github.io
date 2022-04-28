import { makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { LETTER_SPACING } from '../../settings/Variables';

const useStyles = makeStyles((theme: Theme) => ({
  copyright: {
    fontSize: '.75rem',
    letterSpacing: LETTER_SPACING,
    color: 'black'
  }
}));

export const Copyright: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.copyright}>&copy;2021 IT Help, INC.</Typography>
  );
}