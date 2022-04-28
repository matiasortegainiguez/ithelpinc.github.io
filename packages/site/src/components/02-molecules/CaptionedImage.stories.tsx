import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { CaptionedImage } from './CaptionedImage';

export default {
  title: 'Design System/Molecules/CaptionedImage',
  component: CaptionedImage,
  args: {
    caption: 'Remote IT Staffing',
    image: '/images/home-01.jpg'
  }
};

const Template: Story<ComponentProps<typeof CaptionedImage>> = (args) => (
  <CaptionedImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};