import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Logo } from './Logo';

export default {
  title: 'Design System/Atoms/Logo',
  component: Logo
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '250px'
};