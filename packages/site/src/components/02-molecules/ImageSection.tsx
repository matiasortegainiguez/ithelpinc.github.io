import { Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from '../01-atoms/ParentProps';
import { RoundedImage } from '../01-atoms/RoundedImage';
import { SiteLink } from '../01-atoms/SiteLink';

export interface ImageSectionProps extends ParentProps {
  image: string;
  alt?: string;
  linkTo?: string;
  hrefTo?: string;
  reverse?: boolean;
  gutter?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start'
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'center'
    },
    marginBottom: ({ gutter }: { gutter: boolean }) => gutter ? '4rem' : '2rem'
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2rem'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '6rem'
    }
  },
  contentReverse: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2rem'
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: '6rem'
    }
  },
}));

export const ImageSection: React.FC<ImageSectionProps> = ({ image, alt, reverse = false, children, linkTo, hrefTo, gutter = false }) => {
  const classes = useStyles({ gutter });
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isReversed = reverse && isSm;

  const imgElement = <RoundedImage src={image} alt={alt} />;
  const sectionImg = linkTo ? (
    <SiteLink to={linkTo}>{imgElement}</SiteLink>
  ) : hrefTo ? (
    <a href={hrefTo} target="_blank" rel='noopener'>{imgElement}</a>
  ) : imgElement;
  const imageItem = (
    <Grid key='imageItem' item xs={12} sm={4}>
      {sectionImg}
    </Grid>
  )
  const contentItem = (
    <Grid key='contentItem' container item xs={12} sm={8} justify='flex-start' className={!isReversed ? classes.content : classes.contentReverse}>
      {children}
    </Grid>
  )

  const items = !isReversed ? [imageItem, contentItem] : [contentItem, imageItem];

  return (
    <Grid container item xs={12} className={classes.container}>
      {items}
    </Grid>
  );
}