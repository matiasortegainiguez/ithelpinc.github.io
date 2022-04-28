import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageFooter } from './PageFooter';

export default {
  title: 'Design System/Organisms/PageFooter',
  component: PageFooter
};

const Template: Story<ComponentProps<typeof PageFooter>> = (args) => (
  <PageFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};