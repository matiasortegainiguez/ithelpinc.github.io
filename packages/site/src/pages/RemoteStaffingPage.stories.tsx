import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import RemoteStaffingPage from './RemoteStaffingPage';

export default {
  title: 'Pages/Remote IT Staffing',
  component: RemoteStaffingPage
};

const Template: Story<ComponentProps<typeof RemoteStaffingPage>> = (args) => (
  <PageTemplate><RemoteStaffingPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};