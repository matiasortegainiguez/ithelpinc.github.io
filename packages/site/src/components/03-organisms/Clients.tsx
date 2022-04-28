import { Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { TitledText } from '../02-molecules/TitledText';

interface ClientConfig {
  name: string;
  url: string;
  image: string;
}

const clients: ClientConfig[] = [
  {
    name: 'Miss America Organization',
    url: 'https://www.missamerica.org',
    image: 'miss-america.png'
  },
  {
    name: 'Augustin Orthopedics',
    url: 'https://www.augustinortho.com',
    image: 'augustin-orthopedics.png'
  },
  {
    name: 'Fonda Restaurant',
    url: 'http://fondarestaurant.com',
    image: 'fonda-restaurant.png'
  },
  {
    name: 'Knead Hospitality + Design',
    url: 'https://kneadhd.com',
    image: 'knead.png'
  },
  {
    name: 'JF Restaurants',
    url: 'https://www.jfrestaurants.com',
    image: 'jf-restaurants.png'
  },
  {
    name: 'Mjolner Shipping',
    url: 'http://mjolnershipping.com',
    image: 'mjolner-shipping.png'
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  carousel: {
    flexGrow: 1,
  },
  logo: {
    padding: '0px .5rem'
  }
}));

export const Clients: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const clientElements = clients.map((client, index) => (
    <a key={'client' + index} href={client.url} title={client.name} target='_blank' rel='noopener'>
      <img src={`/images/clients/${client.image}`} alt={client.name} width='150' height='150' />
    </a>
  ));

  const maxRow = isMd ? 3 : 2;
  const rowCount = Math.ceil(clientElements.length / maxRow);

  const items: JSX.Element[] = [];
  for (let row = 0; row < rowCount; row++) {
    const start = (row * maxRow);
    items.push((
      <Grid key={`client-item-${row}`} container justify='space-evenly'>
        {clientElements.slice(start, (start + maxRow))}
      </Grid>
    ));
  }

  return (
    <TitledText title='Some of our many valued clients' largeTitle divider>
      <Carousel animation='slide' indicators={false} navButtonsAlwaysInvisible className={classes.carousel}>
        {items}
      </Carousel>
    </TitledText >
  );
}