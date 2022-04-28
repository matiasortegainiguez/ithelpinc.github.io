import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { BodyText } from '../01-atoms/BodyText';
import { ImageSection } from './ImageSection';
import { TitledText } from './TitledText';

export default {
  title: 'Design System/Molecules/ImageSection',
  component: ImageSection,
  args: {
    image: '/images/about-us-01.jpg',
    children: (
      <TitledText title='Why IT Help?'>
        <BodyText gutter='1.25rem'>
          IT Help, INC. is a premier Managed IT Provider, helping
          businesses to implement and pro-actively manage their
          technology by providing outstanding remote and onsite
          IT Support.
        </BodyText>
        <BodyText>
          Combining our Customer-focused approach with quality
          infrastructure, tried and tested tools, strategic IT advice, and
          pro-active network management, we are there for our clients
          24/7 ensuring everything works the way it should.
        </BodyText>
      </TitledText>
    )
  }
};

const Template: Story<ComponentProps<typeof ImageSection>> = (args) => (
  <ImageSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};