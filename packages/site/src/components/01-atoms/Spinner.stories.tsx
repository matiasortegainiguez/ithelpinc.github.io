import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Design System/Atoms/Spinner',
  component: Spinner
};

const Template: Story<ComponentProps<typeof Spinner>> = (args) => (
  <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '250px'
};