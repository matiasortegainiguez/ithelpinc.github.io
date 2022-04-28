import { createStyles, Grid, makeStyles, Snackbar, Theme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Formik, FormikHelpers } from 'formik';
import * as React from "react";
import * as Yup from 'yup';
import { ContactFormData } from '../components/02-molecules/ContactUsForm';
import { ContactUsSection } from '../components/03-organisms/ContactUsSection';
import { useSnsEmail } from '../hooks/SnsEmailHook';
import { RECAPTCHA_SITE_KEY } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%'
    }
  }),
);

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Please provide a valid email address.').required('Email address is required.'),
  message: Yup.string().required('Please provide a message.')
})

interface Status {
  severity: 'success' | 'error';
  message: string;
}

export default () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState<Status | undefined>();
  const state = useSnsEmail<ContactFormData>(RECAPTCHA_SITE_KEY);

  const handleSend = (values: ContactFormData, actions: FormikHelpers<ContactFormData>) => {
    state.send(values, errors => {
      if (errors) {
        if (errors.internal) {
          setStatus({
            severity: 'error',
            message: errors.internal
          });
        } else if (errors.recaptcha) {
          setStatus({
            severity: 'error',
            message: errors.recaptcha
          });
        } else {
          actions.setErrors(errors);
        }
      } else {
        actions.resetForm();
        setStatus({
          severity: 'success',
          message: 'Your message has been sent!'
        });
      }
      actions.setSubmitting(false);
    });
  }

  return (
    <ContentTemplate title='Contact Us' subTitle='Let’s talk!'>
      <Grid container item xs={12} className={classes.root} justify='center'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            company: '',
            message: ''
          }}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSend}
        >
          <ContactUsSection state={state} />
        </Formik>
      </Grid>
      <Snackbar open={!!status} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={10000} onClose={() => { setStatus(undefined) }}>
        <Alert severity={status?.severity || 'info'} variant='filled' onClose={() => { setStatus(undefined) }}>{status?.message}</Alert>
      </Snackbar>
    </ContentTemplate>
  );
}