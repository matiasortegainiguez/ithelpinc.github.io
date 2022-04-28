import { Hidden, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { PageTitleText } from '../01-atoms/PageTitleText';
import { RoundedBox } from '../01-atoms/RoundedBox';

export interface PageTitleProps {
  title: string;
  subTitle?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center'
  },
  titleBox: {
    border: '0.5rem solid white',
    marginLeft: '-0.5rem',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      padding: '0.35rem 3.25rem',
    },
  },
  titleText: {
    textAlign: 'center',
  },
  subTitleBox: {
    zIndex: 0,
    marginLeft: '-3em',
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main
  },
  subTitleText: {
    margin: '0.15rem 0rem 0.15rem 2.5rem'
  }
}));

export const PageTitle: React.FC<PageTitleProps> = ({ title, subTitle }) => {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown implementation='css'>
        <div className={classes.container}>
          <RoundedBox className={classes.titleBox}><PageTitleText>{title}</PageTitleText></RoundedBox>
          <RoundedBox className={classes.subTitleBox}>
            <Typography variant='body1' color='primary' className={classes.subTitleText}>{subTitle || '\u00A0'}</Typography>
          </RoundedBox>
        </div>
      </Hidden>
      <Hidden smUp implementation='css'>
        <RoundedBox><PageTitleText className={classes.titleText}>{title}</PageTitleText></RoundedBox>
      </Hidden>
    </>
  );
}