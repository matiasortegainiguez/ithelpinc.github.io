import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: '1.62rem 1rem',
    minHeight: '4.50rem',
    zIndex: 2
  },
}));

export const HeaderCallToAction: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} alignItems='center' justify='center'>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom>Managed&nbsp;IT&nbsp;Services&nbsp;&amp;&nbsp;More: Network&nbsp;Administration / Help&nbsp;Desk / Desktop&nbsp;Support / Cyber&nbsp;Security / IT&nbsp;Project&nbsp;Support / IT&nbsp;Staffing</Typography>
      </Grid>
    </Grid>
  );
}