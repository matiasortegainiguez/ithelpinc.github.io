import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { SupportButton } from './SupportButton';
import { TopBar } from './TopBar';

export default {
  title: 'Design System/Molecules/TopBar',
  component: TopBar,
};

const Template: Story<ComponentProps<typeof SupportButton>> = (args) => (
  <TopBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};