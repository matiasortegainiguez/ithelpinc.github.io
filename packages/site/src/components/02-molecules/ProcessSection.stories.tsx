import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { ProcessSection } from './ProcessSection';

export default {
  title: 'Design System/Molecules/ProcessSection',
  component: ProcessSection
};

const Template: Story<ComponentProps<typeof ProcessSection>> = (args) => (
  <ProcessSection {...args} />
);

export const Primary = Template.bind({});