import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Clients } from './Clients';

export default {
  title: 'Design System/Organisms/Clients',
  component: Clients
};

const Template: Story<ComponentProps<typeof Clients>> = (args) => (
  <Clients {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};