import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { RoundedBox } from './RoundedBox';

export default {
  title: 'Design System/Atoms/RoundedBox',
  component: RoundedBox,
  args: {
    children: 'Box Content'
  }
};

const Template: Story<ComponentProps<typeof RoundedBox>> = ({children, ...args}) => (
  <RoundedBox {...args}>{children}</RoundedBox>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'First Story'
};