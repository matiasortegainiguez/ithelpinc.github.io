import { Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { PHONE_NUMBER } from '../../settings/Variables';
import { PageTitleText } from '../01-atoms/PageTitleText';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: '1.4rem .25rem',
    minHeight: '4.50rem',
  },
}));

export const CallToAction: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const content = isSm ? (
    <PageTitleText>Call Us Now: {PHONE_NUMBER}</PageTitleText>
  ) : (
      <>
        <PageTitleText>Call Us Now:&nbsp;</PageTitleText>
        <PageTitleText>{PHONE_NUMBER}</PageTitleText>
      </>
    )
  return (
    <Grid container className={classes.container} alignItems='center' justify='center'>
      {content}
    </Grid>
  );
}