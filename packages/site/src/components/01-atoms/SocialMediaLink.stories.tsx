import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { SocialMediaLink } from './SocialMediaLink';

export default {
  title: 'Design System/Atoms/SocialMediaLink',
  component: SocialMediaLink,
  args: {
    url: '#',
    tooltip: 'Click to visit social media.'
  }
};

const Template: Story<ComponentProps<typeof SocialMediaLink>> = (args) => (
  <span style={{fontSize:'2rem'}}><SocialMediaLink {...args} /></span>
);

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  network: 'LinkedIn'
};

export const Instagram = Template.bind({});
Instagram.args = {
  network: 'Instagram'
};

export const Twitter = Template.bind({});
Twitter.args = {
  network: 'Twitter'
};

export const YouTube = Template.bind({});
YouTube.args = {
  network: 'YouTube'
};