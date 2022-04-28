import { AppBar, Grid, GridProps, makeStyles } from "@material-ui/core";
import * as React from "react";
import { ParentProps } from '../components/01-atoms/ParentProps';
import { PageFooter } from '../components/03-organisms/PageFooter';
import { PageHeader } from '../components/03-organisms/PageHeader';
import { GUTTER } from '../settings/Variables';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh'
  },
  placeholder: {
    display: 'flex',
    visibility: 'hidden',
  },
  content: {
    flexGrow: 1
  },
  footer: {
    marginTop: GUTTER
  }
}));

export const PageTemplate: React.FC<GridProps & ParentProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center' spacing={0} className={classes.container} {...props}>
      <Grid container item xs={12}>
        <AppBar position='fixed' color='transparent' elevation={0}>
          <PageHeader />
        </AppBar>
        <div className={classes.placeholder}><PageHeader /></div>
      </Grid>
      <Grid container item xs={12} justify='center' className={classes.content}>
        {children}
      </Grid>
      <Grid container item xs={12} className={classes.footer}>
        <PageFooter />
      </Grid>
    </Grid>
  );
}