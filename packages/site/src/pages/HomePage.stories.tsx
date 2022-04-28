import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import HomePage from './HomePage';

export default {
  title: 'Pages/Home',
  component: HomePage
};

const Template: Story<ComponentProps<typeof HomePage>> = (args) => (
  <PageTemplate><HomePage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};