import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { PageTitle } from './PageTitle';

export default {
  title: 'Design System/Molecules/PageTitle',
  component: PageTitle
};

const Template: Story<ComponentProps<typeof PageTitle>> = (args) => (
  <PageTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Page Title',
  subTitle: 'SubTitle would render here.'
};