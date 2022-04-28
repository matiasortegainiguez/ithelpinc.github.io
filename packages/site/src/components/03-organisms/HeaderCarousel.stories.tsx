import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { HeaderCarousel } from './HeaderCarousel';

export default {
  title: 'Design System/Organisms/HeaderCarousel',
  component: HeaderCarousel
};

const Template: Story<ComponentProps<typeof HeaderCarousel>> = (args) => (
  <HeaderCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};