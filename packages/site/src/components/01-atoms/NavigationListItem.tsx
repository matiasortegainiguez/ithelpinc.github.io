import { ListItem, TypographyProps } from '@material-ui/core';
import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ParentProps } from '../01-atoms/ParentProps';
import { NavigationText } from './NavigationText';

export interface NavigationLinkProps extends ParentProps, TypographyProps {
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LinkBehavior = (to: string) => React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
  <RouterLink ref={ref} to={to} {...props} />
));

export const NavigationListItem: React.FC<NavigationLinkProps> = ({ to, children, ...props }) => {
  return (
    <NavigationText>
      <ListItem button component={LinkBehavior(to)} {...props}>
        {children}
      </ListItem>
    </NavigationText>
  );
}