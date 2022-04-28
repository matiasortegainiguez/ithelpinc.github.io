import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageHeader } from './PageHeader';

export default {
  title: 'Design System/Organisms/PageHeader',
  component: PageHeader
};

const Template: Story<ComponentProps<typeof PageHeader>> = (args) => (
  <PageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};