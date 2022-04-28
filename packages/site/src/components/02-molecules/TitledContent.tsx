import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from "react";
import { StandardMargin } from '../../templates/StandardMargin';
import { ParentProps } from '../01-atoms/ParentProps';
import { PageTitle } from './PageTitle';

export interface TitledContentProps extends ParentProps {
  title: string;
  subTitle?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      margin: '.5rem 0px 1rem'
    }
  }),
);

export const TitledContent: React.FC<TitledContentProps> = ({ title, subTitle, children, ...props }) => {
  const classes = useStyles();

  return (
    <StandardMargin>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.title}>
          <PageTitle title={title} subTitle={subTitle} />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </StandardMargin>
  );
}