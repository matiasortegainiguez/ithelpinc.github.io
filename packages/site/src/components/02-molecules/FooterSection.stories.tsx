import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { FooterSection } from './FooterSection';

export default {
  title: 'Design System/Molecules/FooterSection',
  component: FooterSection,
  args: {
    title: 'Footer Section',
    to: '/home',
    children: <div>Footer Content</div>
  }
};

const Template: Story<ComponentProps<typeof FooterSection>> = ({ children, ...args }) => (
  <FooterSection {...args}>{children}</FooterSection>
);

export const Primary = Template.bind({});
Primary.args = {};