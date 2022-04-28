import { Box, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    content: '',
    display: 'block',
    height: '5px',
    width: '80px',
    borderRadius: '2px',
    backgroundColor: theme.palette.primary.main,
  },
}));

export const DividerLine: React.FC = () => {
  const classes = useStyles();
  return <Box className={classes.root} />;
}