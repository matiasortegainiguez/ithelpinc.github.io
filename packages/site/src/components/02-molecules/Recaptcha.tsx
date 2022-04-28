import { makeStyles } from '@material-ui/core';
import * as React from "react";
import Reaptcha from "reaptcha";
import { RecaptchaState } from "../hooks/useRecaptcha";

export interface RecaptchaProps {
  state: RecaptchaState
}

const useStyles = makeStyles((theme) => ({
  container: {
    '& iframe': {
      borderRadius: '1rem'
    }
  }
}));

export const Recaptcha: React.FC<RecaptchaProps> = ({ state }: RecaptchaProps) => {
  const classes = useStyles();

  return (<Reaptcha
    ref={state.setRecaptchaInstance}
    size="invisible"
    badge="inline"
    sitekey={state.siteKey}
    onVerify={state.setRecaptchaToken}
    onRender={state.recaptchaLoaded}
    className={classes.container}
  />);
}