import { createStyles, Grid, GridProps, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../components/01-atoms/ParentProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        padding: '0px 0.55rem'
      },
      [theme.breakpoints.up('md')]: {
        padding: '0px 12%'
      },
    },
  }),
);

export const HeaderMargin: React.FC<ParentProps & GridProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container {...props}>
      <Grid container item xs={12} className={classes.root}>
        {children}
      </Grid>
    </Grid>
  );
}