import * as React from 'react';
import { ParentProps } from '../01-atoms/ParentProps';
import { SiteButton } from './SiteButton';

export const SupportButton: React.FC<ParentProps> = () => {
  return <SiteButton href="http://support.it-help.net:8040" target="_blank" rel='noopener'>Support</SiteButton>
}