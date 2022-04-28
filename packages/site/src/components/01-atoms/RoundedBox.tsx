import { makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2rem',
    padding: '0.35rem 1.25rem'
  }
}));

export const RoundedBox: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className, children }) => {
  const classes = useStyles();
  const elementClass = [classes.root, className].join(' ');
  return <div className={elementClass}>{children}</div>;
}