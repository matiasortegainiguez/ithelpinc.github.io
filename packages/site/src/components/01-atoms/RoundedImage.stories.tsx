import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RoundedImage } from './RoundedImage';

export default {
  title: 'Design System/Atoms/RoundedImage',
  component: RoundedImage,
  args: {
    src: '/images/about-us-01.jpg',
  }
};

const Template: Story<ComponentProps<typeof RoundedImage>> = (args) => (
  <RoundedImage {...args} />
);

export const Primary = Template.bind({});