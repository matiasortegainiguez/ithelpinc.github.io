import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { BodyText } from './BodyText';

export default {
  title: 'Design System/Atoms/BodyText',
  component: BodyText,
  args: {
    children: 'Body Text Content'
  }
};

const Template: Story<ComponentProps<typeof BodyText>> = ({ children, ...args }) => (
  <BodyText {...args}>{children}</BodyText>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'First Story'
};