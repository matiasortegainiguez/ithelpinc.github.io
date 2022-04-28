import { MenuItem } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ParentProps } from '../01-atoms/ParentProps';
import { NavigationText } from './NavigationText';

export interface RouterMenuItemProps extends ParentProps {
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const ForwardNavLink = React.forwardRef((props, ref) => (
  <NavLink {...props} innerRef={ref} />
));

export const RouterMenuItem: React.FC<RouterMenuItemProps> = ({ children, ...props }) => {
  if (!props.to && !props.onClick) {
    throw new Error(`'to' or 'onClick' must be defined.`);
  }
  return !!props.to ? (
    <MenuItem component={ForwardNavLink} {...props}><NavigationText>{children}</NavigationText></MenuItem>
  ) : (
      <MenuItem onClick={props.onClick}><NavigationText>{children}</NavigationText></MenuItem>
    );
}