import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../01-atoms/ParentProps';
import { CaptionedImage, CaptionedImageProps } from './CaptionedImage';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: '250px',
  },
  content: {
    textAlign: 'center',
    marginTop: '1rem'
  },
}));

export const CaptionedImageSection: React.FC<ParentProps & CaptionedImageProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} className={classes.container} alignContent='flex-start'>
      <Grid item xs={12}><CaptionedImage {...props} /></Grid>
      <Grid container item xs={12}>
        <Typography variant='body1' className={classes.content}>{children}</Typography>
      </Grid>
    </Grid>
  );
}