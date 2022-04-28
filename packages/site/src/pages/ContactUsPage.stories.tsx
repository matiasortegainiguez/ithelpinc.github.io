import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import ContactUsPage from './ContactUsPage';

export default {
  title: 'Pages/Contact Us',
  component: ContactUsPage
};

const Template: Story<ComponentProps<typeof ContactUsPage>> = (args) => (
  <PageTemplate><ContactUsPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};