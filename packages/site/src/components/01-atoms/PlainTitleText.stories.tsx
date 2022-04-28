import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PlainTitleText } from './PlainTitleText';

export default {
  title: 'Design System/Atoms/PlainTitleText',
  component: PlainTitleText,
  args: {
    children: 'Plain Title Text'
  },
};

const Template: Story<ComponentProps<typeof PlainTitleText>> = ({ children, ...args }) => (
  <PlainTitleText {...args}>{children}</PlainTitleText>
);

export const Primary = Template.bind({});
Primary.args = {
};