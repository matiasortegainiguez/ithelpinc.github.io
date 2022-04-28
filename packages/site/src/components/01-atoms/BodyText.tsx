import { makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { ParentProps } from './ParentProps';

export interface BodyTextProps extends ParentProps {
  gutter?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: (props: BodyTextProps) => props.gutter
  },
}));

export const BodyText: React.FC<BodyTextProps> = ({ gutter, children }) => {
  const classes = useStyles({ gutter });
  return <Typography variant='body1' className={gutter ? classes.root : undefined}>{children}</Typography>;
}