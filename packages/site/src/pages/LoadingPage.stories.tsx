import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { LoadingPage } from './LoadingPage';

export default {
  title: 'Pages/Loading',
  component: LoadingPage
};

const Template: Story<ComponentProps<typeof LoadingPage>> = (args) => (
  <LoadingPage />
);

export const Primary = Template.bind({});
Primary.args = {};