import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import ItProjectsPage from './ItProjectsPage';

export default {
  title: 'Pages/IT Projects and Deployments',
  component: ItProjectsPage
};

const Template: Story<ComponentProps<typeof ItProjectsPage>> = (args) => (
  <PageTemplate><ItProjectsPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};