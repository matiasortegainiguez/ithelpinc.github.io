import { Link, makeStyles, Theme, TypographyProps } from '@material-ui/core';
import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ParentProps } from '../01-atoms/ParentProps';

export interface SiteLinkProps extends ParentProps, TypographyProps {
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const LinkBehavior = (to: string) => React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
  <RouterLink ref={ref} to={to} {...props} />
));

export const SiteLink: React.FC<SiteLinkProps> = ({ to, onClick, children, ...props }) => {
  const classes = useStyles();
  if (!to && !onClick) {
    throw new Error(`'to' or 'onClick' must be defined.`);
  }
  return !!to ? (
    <Link component={LinkBehavior(to)} className={classes.link} {...props}>{children}</Link>
  ) : (
      <Link onClick={onClick} className={classes.link} {...props}>{children}</Link>
    );
}