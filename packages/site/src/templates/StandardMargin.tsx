import { createStyles, Grid, GridProps, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../components/01-atoms/ParentProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        padding: '0px 0.55rem'
      },
    },
  }),
);

export const StandardMargin: React.FC<ParentProps & GridProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container {...props}>
      <Grid item md={1} lg={2} xl={3}></Grid>
      <Grid container item xs={12} sm={12} md={10} lg={8} xl={6} className={classes.root}>
        {children}
      </Grid>
      <Grid item md={1} lg={2} xl={3}></Grid>
    </Grid>
  );
}