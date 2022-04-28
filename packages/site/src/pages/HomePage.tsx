import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { TitledContent } from '../components/02-molecules/TitledContent';
import { TitledText } from '../components/02-molecules/TitledText';
import { Clients } from '../components/03-organisms/Clients';
import { HeaderCarousel } from '../components/03-organisms/HeaderCarousel';
import { HomeBlurbs } from '../components/03-organisms/HomeBlurbs';
import { GUTTER } from '../settings/Variables';

const useStyles = makeStyles((theme: Theme) => ({
  opening: {
    textAlign: 'center',
    marginBottom: '3rem'
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <HeaderCarousel />
      <TitledContent title='Welcome to IT Help' subTitle='It’s All About the Help!'>
        <Box className={classes.opening}>
          <Typography variant='body1'>
            At IT Help we really are all about the help. As an MSP (Managed Service Provider) we are devoted to our
            Managed IT and Remote Staffing customers and build strong, trusted relationships with them. We give our
            clients enterprise level customer service, IT services, and solutions at prices that make sense for any business.
          </Typography>
        </Box>
        <Box className={classes.opening}>
          <HomeBlurbs />
        </Box>
        <ImageSection image='/images/home-04.gif' alt='Vision and Mission' gutter>
          <TitledText title='Vision and Mission' largeTitle>
            <TitledText title='Our Vision'>
              <BodyText gutter={GUTTER}>
                “Ductus Exemplo” which means to Lead by Example. We will
                accomplish this through our Mission.
              </BodyText>
            </TitledText>
            <TitledText title='Our Mission'>
              <BodyText>
                To be the best IT Support / IT Staffing Provider with the best
                Customer Service in the Industry… period.
              </BodyText>
            </TitledText>
          </TitledText>
        </ImageSection>
        <Box className={classes.opening}>
          <Clients />
        </Box>
      </TitledContent>
    </>
  );
}