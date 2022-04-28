import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import ManagedServicesPage from './ManagedServicesPage';

export default {
  title: 'Pages/Managed IT Services',
  component: ManagedServicesPage
};

const Template: Story<ComponentProps<typeof ManagedServicesPage>> = (args) => (
  <PageTemplate><ManagedServicesPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};