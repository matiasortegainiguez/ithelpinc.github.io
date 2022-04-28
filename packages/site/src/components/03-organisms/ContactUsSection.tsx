import { Grid, makeStyles, Theme } from '@material-ui/core';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { SnsEmailState } from '../../hooks/SnsEmailHook';
import { PageTitleText } from '../01-atoms/PageTitleText';
import { ContactFormData, ContactUsForm } from '../02-molecules/ContactUsForm';
import { Map } from '../02-molecules/Map';
import { Recaptcha } from '../02-molecules/Recaptcha';
import { SiteButton } from '../02-molecules/SiteButton';

export interface ContactUsSectionProps {
  state: SnsEmailState<ContactFormData>
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: '2rem',
    backgroundColor: theme.palette.primary.main
  },
  section: {
    padding: '1rem 2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 1rem',
    },
  },
  map: {
    flexGrow: 1,
    padding: '0 0 1rem',
  }
}));

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({ state }) => {
  const classes = useStyles();
  const { submitForm, isSubmitting, isValid } = useFormikContext<ContactFormData>();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} md={6} className={classes.section}>
        <Grid item xs={12}><PageTitleText>Need Us? Email&nbsp;Us!</PageTitleText></Grid>
        <ContactUsForm />
        <Grid container item xs={12} justify='flex-end'>
          <SiteButton type='submit' disabled={!isValid || !state.ready || isSubmitting} busy={isSubmitting} onClick={submitForm} >Submit</SiteButton>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} className={classes.section} direction='column' alignContent='flex-start'>
        <Grid container item className={classes.map} alignItems='stretch'>
          <Map />
        </Grid>
        <Grid item>
          <Recaptcha state={state.recaptchaState} />
        </Grid>
      </Grid>
    </Grid >
  );
}