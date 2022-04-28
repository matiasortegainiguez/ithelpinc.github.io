import { Box, Fade, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../01-atoms/ParentProps';

export interface CarouselItemProps extends ParentProps {
  image: string;
  title: string;
  align?: 'center' | 'left';
  showTitle?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    boxShadow: 'none',
    width: '100%',
    height: '42vw',
    position: 'relative',
    textAlign: ({ align }: { align: 'center' | 'left' }) => align,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      height: '32vh',
    },
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    overflowY: 'hidden',
    verticalAlign: 'middle',
    backgroundColor: 'inherit'
  },
  image: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  title: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    fontSize: '5.5vw',
    fontWeight: 500,
    textShadow: '-3px 3px black',
    marginBottom: '2.7vw',
    marginLeft: ({ align }: { align: 'center' | 'left' }) => align === 'left' ? '2.7vw' : ''
  },
}));

export const CarouselItem: React.FC<CarouselItemProps> = ({ image, title, align, showTitle = true }) => {
  const classes = useStyles({ align: !align ? 'center' : align });
  return (
    <Paper className={classes.container}>
      <Box className={classes.imageContainer}>
        <img src={image} className={classes.image} alt={title} />
      </Box>
      <Fade in={showTitle} timeout={2000}><Typography variant='h3' className={classes.title}>{title}</Typography></Fade>
    </Paper>
  );
}