import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Logo } from '../components/01-atoms/Logo';
import { Spinner } from '../components/01-atoms/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexItem: {
    padding: '5px',
    textAlign: 'center'
  },
  row: {
    width: '284px',
    padding: '15px'
  },
  logo: {
    width: '50vw',
    height: 'auto'
  }
}));

export const LoadingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.flexItem}>
          <Logo className={classes.logo} />
        </div>
        <div className={classes.flexItem}>
          <Spinner width="50px" height="50px" />
        </div>
      </div>
    </div>
  );
}
