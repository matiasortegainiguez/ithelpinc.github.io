import { Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { NavigationLink } from '../01-atoms/NavigationLink';
import { NavigationText } from '../01-atoms/NavigationText';
import { ParentProps } from '../01-atoms/ParentProps';

export interface FooterSectionProps extends ParentProps {
  title: string;
  to?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      margin: '2rem 0rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0rem',
    },
  },
  title: {
    marginBottom: '.5rem'
  },
}));

export const FooterSection: React.FC<FooterSectionProps> = ({ title, to, children }) => {
  const classes = useStyles();
  const sectionTitle = !to ? (
    <NavigationText>{title}</NavigationText>
  ) : (
      <NavigationLink to={to}>{title}</NavigationLink>
    )
  return (
    <Grid container item xs={12} sm={6} md={3} className={classes.container}>
      <Grid item xs={12} className={classes.title}>{sectionTitle}</Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}