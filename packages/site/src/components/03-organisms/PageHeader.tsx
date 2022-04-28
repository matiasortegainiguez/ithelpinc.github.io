import { Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { HeaderMargin } from '../../templates/HeaderMargin';
import { Logo } from '../01-atoms/Logo';
import { SiteLink } from '../01-atoms/SiteLink';
import { Navigation } from '../02-molecules/Navigation';
import { TopBar } from '../02-molecules/TopBar';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: '.25rem',
  },
  logoItem: {
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      paddingLeft: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingLeft: '0.25rem'
    },
  },
  navItem: {
    minHeight: '2rem',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      paddingRight: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-end',
      paddingRight: '0.25rem'
    },
  },
  gutter: {
    marginBottom: '0.35rem',
    backgroundColor: 'white',
  }
}));

export const PageHeader: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.gutter}>
      <TopBar />
      <HeaderMargin>
        <Grid container item xs={12} className={classes.container}>
          <Grid item container xs={10} sm={12} md={6} className={classes.logoItem}>
            <SiteLink to='/home'><Logo width='245px' height='auto' /></SiteLink>
          </Grid>
          <Grid item container xs={2} sm={12} md={6} className={classes.navItem}>
            <Navigation />
          </Grid>
        </Grid>
      </HeaderMargin>
    </Grid>
  );
}