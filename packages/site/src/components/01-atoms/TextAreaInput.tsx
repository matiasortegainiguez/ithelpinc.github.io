import { makeStyles, Theme, Typography } from '@material-ui/core';
import { useField } from 'formik';
import * as React from 'react';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: 'none',
    resize: 'none',
    margin: '.35rem 0',
    boxSizing: 'border-box',
    padding: '.25rem .75rem',
    borderRadius: '1rem',
    backgroundColor: 'white',
    ...theme.typography.body2,
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  },
  error: {
    color: theme.palette.error.main
  }
}));

export const TextAreaInput: React.FC<any> = (props) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? (
    <Typography variant='caption' className={classes.error}>{meta.error}</Typography>
  ) : null;
  return (
    <>
      <textarea className={classes.root} placeholder={props.name} {...field} {...props} />
      {error}
    </>
  );
}