import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import TermsOfUsePage from './TermsOfUsePage';

export default {
  title: 'Pages/Terms of Use',
  component: TermsOfUsePage
};

const Template: Story<ComponentProps<typeof TermsOfUsePage>> = (args) => (
  <PageTemplate><TermsOfUsePage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};