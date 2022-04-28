import { Button, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { LETTER_SPACING } from '../../settings/Variables';
import { ParentProps } from '../01-atoms/ParentProps';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: '2rem',
    textTransform: 'none',
    textDecoration: 'none',
    padding: '0.15rem 0.75rem',
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    }
  },
  disabled: {
    border: `1px solid ${theme.palette.common.black}`,
    backgroundColor: theme.palette.grey[300]
  },
  buttonText: {
    fontWeight: 700,
    fontSize: '.75rem',
    letterSpacing: LETTER_SPACING,
    '&:hover': {
      color: theme.palette.secondary.main,
    }
  },
}));

export const SiteButton: React.FC<any & ParentProps> = ({ children, busy = false, disabled = false, ...props }) => {
  const classes = useStyles();
  const [timerId, setTimerId] = useState<number>(-1);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  if (busy && timerId === -1) {
    setTimerId(window.setTimeout(() => {
      setShowProgress(true);
    }, 2000));
  }
  if (!busy && timerId !== -1) {
    clearTimeout(timerId);
    setTimerId(-1);
    setShowProgress(false);
  }
  const icon = showProgress ? <CircularProgress size={18} variant='indeterminate' /> : null;

  return <Button {...props} classes={{disabled: classes.disabled}} className={classes.button} disabled={busy || disabled} startIcon={icon}><Typography variant='body2' color='primary' className={classes.buttonText}>{children}</Typography></Button>
}