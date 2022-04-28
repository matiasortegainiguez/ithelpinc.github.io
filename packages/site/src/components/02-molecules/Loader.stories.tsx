import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../../templates/PageTemplate';
import { Loader } from './Loader';

export default {
  title: 'Design System/Molecules/Loader',
  component: Loader
};

const Template: Story<ComponentProps<typeof Loader>> = (args) => (
  <PageTemplate><Loader {...args} /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
};