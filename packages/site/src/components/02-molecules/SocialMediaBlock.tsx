import { Grid } from '@material-ui/core';
import * as React from "react";
import { SocialMediaLink } from "../01-atoms/SocialMediaLink";

export interface SocialMediaBlockProps {
  color?: string;
  fontSize?: string;
}

export const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({ color = 'white', fontSize = '1.45rem' }) => {
  return (<Grid container alignItems='center' justify='flex-start' style={{ fontSize }}>
    <SocialMediaLink network='LinkedIn' url='https://www.linkedin.com/company/ithelpinc/' tooltip='Please visit us on Linkedin' color={color} />
    <SocialMediaLink network='Instagram' url='https://www.instagram.com/ithelpinc/' tooltip='Please visit us on Instagram' color={color} />
    <SocialMediaLink network='YouTube' url='https://www.youtube.com/channel/UCVznbkRs6jFr24n5zx-xwSg?sub_confirmation=1' tooltip='Please subscribe on YouTube' color={color} />
    <SocialMediaLink network='Twitter' url='https://twitter.com/ithelpinc' tooltip='Please visit us on Twitter' color={color} />
  </Grid>);
} 