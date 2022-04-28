import { Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { DividerLine } from '../01-atoms/DividerLine';
import { ParentProps } from '../01-atoms/ParentProps';
import { PlainTitleText } from '../01-atoms/PlainTitleText';

export interface FooterSectionProps extends ParentProps {
  title: string;
  divider?: boolean;
  largeTitle?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: '1.25rem'
  },
}));

export const TitledText: React.FC<FooterSectionProps> = ({ title, divider = false, children, largeTitle }) => {
  const classes = useStyles();
  const dividerElement = divider ? (
    <Grid container item xs={12} justify='center' alignContent='center' className={classes.title}><DividerLine /></Grid>
  ) : undefined;
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={classes.title}><PlainTitleText fontSize={largeTitle ? '1.8rem' : undefined}>{title}</PlainTitleText></Grid>
      {dividerElement}
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}