import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Navigation } from './Navigation';
import { PageTitle } from './PageTitle';

export default {
  title: 'Design System/Molecules/Navigation',
  component: Navigation
};

const Template: Story<ComponentProps<typeof PageTitle>> = (args) => (
  <Navigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};