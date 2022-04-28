import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { CaptionedImageSection } from './CaptionedImageSection';

export default {
  title: 'Design System/Molecules/CaptionedImageSection',
  component: CaptionedImageSection,
  args: {
    caption: 'Remote IT Staffing',
    image: '/images/home-01.jpg'
  }
};

const Template: Story<ComponentProps<typeof CaptionedImageSection>> = (args) => (
  <CaptionedImageSection {...args}>
    Need a part-time or
    full-time L1 L2 L3 Engineer
    or an Engineer with a very
    specific skillset? Contact us.
  </CaptionedImageSection>
);

export const Primary = Template.bind({});
Primary.args = {};