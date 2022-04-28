import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import * as React from 'react';
import { PHONE_NUMBER } from '../../settings/Variables';
import { HeaderMargin } from '../../templates/HeaderMargin';
import { SocialMediaBlock } from './SocialMediaBlock';
import { SupportButton } from './SupportButton';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '0.35rem 0rem',
    backgroundColor: theme.palette.primary.main
  },
  phoneSection: {
    alignItems: 'center',
    fontSize: '0.85em',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  linkSection: {
    alignItems: 'center',
    fontSize: '1.45em',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
      paddingRight: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  phone: {
    color: 'white',
    display: 'inline',
    fontSize: 'inherit'
  }
}));

export const TopBar: React.FC = () => {
  const classes = useStyles();
  return (
    <HeaderMargin className={classes.container}>
      <Grid container item xs={12} sm={6} className={classes.phoneSection}>
        <CallIcon htmlColor='white' fontSize='small' />&nbsp;<Typography variant='body2' className={classes.phone}>{PHONE_NUMBER}</Typography>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Grid container className={classes.linkSection}>
          <Grid item>
            <SocialMediaBlock />
          </Grid>
          <Grid item>
            <SupportButton />
          </Grid>
        </Grid>
      </Grid>
    </HeaderMargin>
  );
}