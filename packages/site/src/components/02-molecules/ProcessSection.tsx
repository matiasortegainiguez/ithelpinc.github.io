import { Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { PageTitleText } from '../01-atoms/PageTitleText';


const useStyles = makeStyles((theme: Theme) => ({
  darkTitle: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    paddingBottom: '2rem'
  },
  responsive: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '18%',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '30%',
      justifyContent: 'space-evenly',
    },
    height: 'auto',
    padding: '.15rem'
  },
  imageContainer: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
    },
    paddingBottom: '2rem'
  }
}));

export const ProcessSection: React.FC = () => {
  const classes = useStyles();

  const images: any[] = [];
  for (let i = 1; i < 6; i++) {
    const el = <img key={`process-0${i}`} src={`/images/process-0${i}.png`} className={classes.responsive} />;
    images.push(el);
  }

  return (
    <Grid container item xs={12} justify='center'>
      <PageTitleText className={classes.darkTitle}>THE PROCESS</PageTitleText>
      <Grid item container xs={12} alignItems='center' className={classes.imageContainer}>
        {images}
      </Grid>
      <PageTitleText className={classes.darkTitle}>Ready to hire new talent? Email us at sales@ithelpinc.com</PageTitleText>
    </Grid>
  );
}