import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { BodyText } from '../01-atoms/BodyText';
import { TitledText } from './TitledText';

export default {
  title: 'Design System/Molecules/TitledText',
  component: TitledText,
  args: {
    title: 'IT Infrastructure Projects',
    children: (<BodyText>
      Computers and Routers and Firewalls oh my! Add wi-fi
      devices, switches, patch panels, cameras, structured cabling…the
      list goes on and on. We handle all IT infrastructure projects from
      planning to installation. Let us be your one neck to choke.
    </BodyText>)
  }
};

const Template: Story<ComponentProps<typeof TitledText>> = (args) => (
  <TitledText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};

export const MultiParagraph = Template.bind({});
MultiParagraph.args = {
  title: 'Why IT Help?',
  children: (<><BodyText gutter='1.25rem'>
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
  </BodyText></>)
};