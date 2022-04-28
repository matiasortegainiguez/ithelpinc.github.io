import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { NavigationLink } from './NavigationLink';

export default {
  title: 'Design System/Atoms/NavigationLink',
  component: NavigationLink,
  args: {
    children: 'Link Text',
    to: '#'
  }
};

const Template: Story<ComponentProps<typeof NavigationLink>> = ({ children, ...args }) => (
  <NavigationLink {...args}>{children}</NavigationLink>
);

export const Primary = Template.bind({});
Primary.args = {
};