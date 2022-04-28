import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import AboutUsPage from './AboutUsPage';

export default {
  title: 'Pages/About Us',
  component: AboutUsPage
};

const Template: Story<ComponentProps<typeof AboutUsPage>> = (args) => (
  <PageTemplate><AboutUsPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};