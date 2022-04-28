import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import * as React from 'react';
import { HeaderMargin } from '../../templates/HeaderMargin';
import { Copyright } from '../01-atoms/Copyright';
import { FooterText } from '../01-atoms/FooterText';
import { CallToAction } from '../02-molecules/CallToAction';
import { FooterSection } from '../02-molecules/FooterSection';
import { SocialMediaBlock } from '../02-molecules/SocialMediaBlock';

const useStyles = makeStyles((theme: Theme) => ({
  copyright: {
    marginBottom: '1.25rem'
  },
}));


export const PageFooter: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container item xs={12} >
      <CallToAction />
      <HeaderMargin>
        <Grid container item xs={12} alignItems='flex-start' justify='space-between'>
          <FooterSection title='Like us? Follow us!'>
            <SocialMediaBlock color={theme.palette.primary.main} fontSize='1.7rem' />
          </FooterSection>
          <FooterSection title='Terms of Use' to='/terms-of-use' />
          <FooterSection title='Privacy Policy' to='/privacy-policy' />
          <FooterSection title='Address'>
            <FooterText>One Liberty Plaza, Suite 2300</FooterText>
            <FooterText>New York, NY 10006</FooterText>
            <FooterText>Email Us: <a href='mailto:info@ithelpinc.com'>info@ithelpinc.com</a></FooterText>
          </FooterSection>
        </Grid >
      </HeaderMargin >
      <Grid container item xs={12} justify='center' className={classes.copyright}><Copyright /></Grid>
    </Grid >
  );
}