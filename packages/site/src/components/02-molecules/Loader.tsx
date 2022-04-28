import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { Spinner } from '../01-atoms/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100%'
  }
}));

export const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}
      direction="column"
      justify='center'
      alignItems="center">
      <Spinner width="50px" height="50px" />
    </Grid>
  );
}
