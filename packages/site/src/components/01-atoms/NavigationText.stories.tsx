import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { NavigationText } from './NavigationText';

export default {
  title: 'Design System/Atoms/NavigationText',
  component: NavigationText,
  args: {
    children: 'Navigation Text'
  },
};

const Template: Story<ComponentProps<typeof NavigationText>> = ({ children, ...args }) => (
  <NavigationText {...args}>{children}</NavigationText>
);

export const Primary = Template.bind({});
Primary.args = {
};