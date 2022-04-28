import { Box, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../01-atoms/ParentProps';
import { SiteLink } from '../01-atoms/SiteLink';

export interface CaptionedImageProps extends ParentProps {
  image: string;
  caption: string;
  linkTo?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: '250px',
    height: 'auto',
    position: 'relative',
    textAlign: 'center',
    borderRadius: '1.25rem',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '1.25rem',
  },
  captionContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    height: '2.2rem',
    backgroundColor: theme.palette.primary.main
  },
}));

export const CaptionedImage: React.FC<CaptionedImageProps> = ({ image, caption, linkTo }) => {
  const classes = useStyles();
  const imgElement = <img src={image} className={classes.image} alt={caption} />;
  const captionedImg = linkTo ? (
    <SiteLink to={linkTo}>{imgElement}</SiteLink>
  ) : imgElement;
  return (
    <Box className={classes.container}>
      {captionedImg}
      <Grid container className={classes.captionContainer} alignItems='center'>
        <Grid item xs={12}>
          <Typography variant='h4'>{caption}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}