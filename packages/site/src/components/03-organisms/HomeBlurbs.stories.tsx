import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { HomeBlurbs } from './HomeBlurbs';

export default {
  title: 'Design System/Organisms/HomeBlurbs',
  component: HomeBlurbs
};

const Template: Story<ComponentProps<typeof HomeBlurbs>> = (args) => (
  <HomeBlurbs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};