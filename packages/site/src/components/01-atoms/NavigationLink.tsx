import * as React from 'react';
import { NavigationText } from './NavigationText';
import { SiteLink, SiteLinkProps } from './SiteLink';

export const NavigationLink: React.FC<SiteLinkProps> = (props) => {

  return (
    <NavigationText><SiteLink {...props} /></NavigationText>
  );
}