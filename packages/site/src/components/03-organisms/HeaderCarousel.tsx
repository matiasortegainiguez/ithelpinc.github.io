import { Box, Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselItem } from '../02-molecules/CarouselItem';
import { HeaderCallToAction } from '../02-molecules/HeaderCallToAction';

const useStyles = makeStyles((theme: Theme) => ({
  carousel: {
    width: '100%',
    height: '42vw',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      height: '32vh',
    },
  },
}));

export const HeaderCarousel: React.FC = () => {
  const classes = useStyles();
  const [showTitle, setShowTitle] = React.useState<boolean[]>([false, false, false])

  const updateTitles = (next: number) => {
    setShowTitle(prev => {
      return prev.map((val, index) => index === next);
    });
  }

  return (
    <Grid container item xs={12} >
      <Box className={classes.carousel}>
        <Carousel indicators={false} onChange={updateTitles} changeOnFirstRender={true} >
          <CarouselItem image={`/images/carousel01.jpg`} title="Reliable IT Staffing for MSP'S" showTitle={showTitle[0]} />
          <CarouselItem image={`/images/carousel02.jpg`} title='Pro-Active Managed IT Services' showTitle={showTitle[1]} />
          <CarouselItem image={`/images/carousel03.jpg`} align='left' title='IT Project Deployments & White Label Support' showTitle={showTitle[2]} />
        </Carousel>
      </Box>
      <HeaderCallToAction />
    </Grid >
  );
}