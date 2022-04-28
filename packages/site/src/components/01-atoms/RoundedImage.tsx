import { makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

interface StyleProps {
  borderRadius?: string;
}

export interface RoundedImageProps extends StyleProps {
  src: string;
  alt?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: ({ borderRadius }: StyleProps) => borderRadius,
    maxWidth: '100%',
  }
}));

export const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt, borderRadius = '2rem' }) => {
  const classes = useStyles({ borderRadius });
  return <img src={src} className={classes.root} alt={alt} />;
}