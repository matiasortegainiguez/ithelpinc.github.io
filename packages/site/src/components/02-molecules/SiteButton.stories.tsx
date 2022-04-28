import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { SiteButton } from './SiteButton';

export default {
  title: 'Design System/Molecules/SiteButton',
  component: SiteButton,
};

const Template: Story<ComponentProps<typeof SiteButton>> = (args) => (
  <SiteButton {...args}>Site Button</SiteButton>
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Busy = Template.bind({});
Busy.args = {
  busy: true
};