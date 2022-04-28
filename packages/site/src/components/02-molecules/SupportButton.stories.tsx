import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { SupportButton } from './SupportButton';

export default {
  title: 'Design System/Molecules/SupportButton',
  component: SupportButton,
};

const Template: Story<ComponentProps<typeof SupportButton>> = (args) => (
  <SupportButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};