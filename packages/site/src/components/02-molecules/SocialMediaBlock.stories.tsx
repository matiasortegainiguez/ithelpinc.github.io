import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { SocialMediaBlock } from './SocialMediaBlock';

export default {
  title: 'Design System/Molecules/SocialMediaBlock',
  component: SocialMediaBlock,
};

const Template: Story<ComponentProps<typeof SocialMediaBlock>> = (args) => (
  <SocialMediaBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};