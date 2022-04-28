import { makeStyles, SvgIcon } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import * as React from 'react';

export interface SocialMediaLinkProps {
  network: 'LinkedIn' | 'Instagram' | 'Twitter' | 'YouTube';
  url: string;
  color?: string;
  tooltip: string;
}

const NetworkIconMap: Record<string, typeof SvgIcon> = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  YouTube: YouTubeIcon
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inherit',
    margin: '0.15rem 0.3rem 0.15rem -0.15rem'
  }
}));

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ network, url, tooltip, color = 'white' }: SocialMediaLinkProps) => {
  const classes = useStyles();
  const Icon: typeof SvgIcon = NetworkIconMap[network];
  return (
    <a href={url} target='_blank' rel='noopener' title={tooltip} className={classes.root}><Icon htmlColor={color} fontSize='inherit' /></a>
  );
};