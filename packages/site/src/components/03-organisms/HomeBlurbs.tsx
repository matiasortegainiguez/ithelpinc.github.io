import { Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { CaptionedImageSection } from '../02-molecules/CaptionedImageSection';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
}));

export const HomeBlurbs: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.container} spacing={3}>
      <CaptionedImageSection image='/images/home-01.jpg' caption='Remote IT Staffing' linkTo='/remote-staffing'>
        Need a part-time or
        full-time L1 L2 L3 Engineer
        or an Engineer with a very
        specific skillset? Contact us.
      </CaptionedImageSection>
      <CaptionedImageSection image='/images/home-02.jpg' caption='Managed IT Services' linkTo='/managed-services'>
        Need Help Desk & Desktop
        Support? Network
        Administration or Server
        Support? Contact Us.
      </CaptionedImageSection>
      <CaptionedImageSection image='/images/home-03.jpg' caption='IT Projects & Deployments' linkTo='/it-projects'>
        Office 365 Migration? Cloud
        Project? VMWare or other
        Virtual Deployment? Cyber
        Security Need? Contact Us.
      </CaptionedImageSection>
    </Grid >
  );
}