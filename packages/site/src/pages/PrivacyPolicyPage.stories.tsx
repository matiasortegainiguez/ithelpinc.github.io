import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import PrivacyPolicyPage from './PrivacyPolicyPage';

export default {
  title: 'Pages/Privacy Policy',
  component: PrivacyPolicyPage
};

const Template: Story<ComponentProps<typeof PrivacyPolicyPage>> = (args) => (
  <PageTemplate><PrivacyPolicyPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};