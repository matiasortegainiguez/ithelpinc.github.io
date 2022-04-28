import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTitleText } from './PageTitleText';

export default {
  title: 'Design System/Atoms/PageTitleText',
  component: PageTitleText,
  args: {
    children: 'Page Title Text'
  },
};

const Template: Story<ComponentProps<typeof PageTitleText>> = ({ children, ...args }) => (
  <PageTitleText {...args}>{children}</PageTitleText>
);

export const Primary = Template.bind({});
Primary.args = {
};