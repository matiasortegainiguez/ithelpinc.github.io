import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { CarouselItem } from './CarouselItem';

export default {
  title: 'Design System/Molecules/CaourselItem',
  component: CarouselItem,
  args: {
    title: 'Reliable IT Staffing for MSP\'S',
    image: '/images/carousel01.jpg'
  }
};

const Template: Story<ComponentProps<typeof CarouselItem>> = (args) => (
  <CarouselItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};