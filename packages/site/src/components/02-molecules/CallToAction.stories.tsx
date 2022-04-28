import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { CallToAction } from './CallToAction';

export default {
  title: 'Design System/Molecules/CallToAction',
  component: CallToAction
};

const Template: Story<ComponentProps<typeof CallToAction>> = (args) => (
  <CallToAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};