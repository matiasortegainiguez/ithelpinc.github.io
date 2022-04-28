import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTemplate } from '../templates/PageTemplate';
import TestimonialsPage from './TestimonialsPage';

export default {
  title: 'Pages/Testimonials',
  component: TestimonialsPage
};

const Template: Story<ComponentProps<typeof TestimonialsPage>> = (args) => (
  <PageTemplate><TestimonialsPage /></PageTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};