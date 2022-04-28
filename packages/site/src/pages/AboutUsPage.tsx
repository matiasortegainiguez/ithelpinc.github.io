import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

export default () => {

  return (
    <ContentTemplate title='About Us' subTitle='We Lead by Example & Provide Top-notch IT Support.'>
      <ImageSection image='/images/about-us-01.jpg' alt='Why IT Help?' gutter>
        <TitledText title='Why IT Help?'>
          <BodyText gutter={GUTTER}>
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
      </ImageSection>

      <ImageSection image='/images/about-us-02.png' reverse alt='Better Together'>
        <TitledText title='We’re all about the Help!'>
          <BodyText gutter={GUTTER}>
            With cutting-edge technology and highly skilled specialists we
            are committed to providing a wide range of top-quality IT to
            drive your growth.
          </BodyText>
          <BodyText>
            We believe in building long-term relationships with our clients
            while building confidence and trust in our capabilities and
            services.
          </BodyText>
        </TitledText>
      </ImageSection>
    </ContentTemplate>
  );
}