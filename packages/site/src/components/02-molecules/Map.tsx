import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.096600013749!2d-74.0111773725357!3d40.' +
  '709509578488095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19e00fffff%3A0xd81170f750bf2e36!2sOne%' +
  '20Liberty%20Plaza!5e0!3m2!1sen!2sec!4v1612200330587!5m2!1sen!2sec';

const useStyles = makeStyles((theme: Theme) => ({
  map: {
    borderRadius: '1rem',
    border: 'none',
    width: '100%',
    height: '100%'
  }
}));

export const Map: React.FC = () => {
  const classes = useStyles();
  return (
    <iframe src={MAP_URL} className={classes.map} />
  );
}