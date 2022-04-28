import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

export default () => {
  return (
    <ContentTemplate title='Managed IT Services' subTitle='We’re All About the Help.'>
      <ImageSection image='/images/managed-services-01.jpg' alt='24x7 IT Helpdesk' gutter>
        <TitledText title='24x7 IT Helpdesk'>
          <BodyText gutter={GUTTER}>
            Peace of mind. It’s what we all want when running our
            business. We give you that with our 24x7 Helpdesk. Need
            real-support in real-time? We are here for you.
          </BodyText>
        </TitledText>
        <TitledText title='On-site Support'>
          <BodyText>
            Hey, things happen. Hardware breaks or a user simply needs
            the re-assurance of someone being onsite to resolve an issue.
            We’ve got you covered with local staff ready to support you.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/managed-services-02.jpg' reverse alt='Cloud Productivity Solutions' gutter>
        <TitledText title='Cloud Productivity Solutions'>
          <BodyText gutter={GUTTER}>
            Is it C for Cloud or Confusion? Moving over to the Cloud, be it in
            a public, private or hybrid environment should not be
            confusing or frustrating. Let us help you plan and implement
            the best strategy for your business.
          </BodyText>
        </TitledText>
        <TitledText title='Business Continuity & Disaster Recovery'>
          <BodyText>
            Do you have a Business Continuity and Disaster Recovery plan?
            If not, oh no! It’s ok though, we can do this in our sleep.
            Now you can go to sleep knowing your backups are running
            seamlessly and you can still run the business in case of a
            disaster.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/managed-services-03.jpg' alt='Microsoft 365 Management (Office 365) & On-Premise Exchange' gutter>
        <TitledText title='Microsoft 365 Management (Office 365) & On-Premise Exchange'>
          <BodyText>
            Adding or deleting users, distribution lists, recovering lost
            e-mail, managing mailbox size, you name it. If it is in the cloud
            or on-premise, we will manage your e-mail environment for
            you. We will make sure it is backed-up and most important,
            secure. Need it moved or upgraded? No problem.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/managed-services-04.jpg' reverse alt='Network Operation Center (NOC)' gutter>
        <TitledText title='Network Operation Center (NOC)'>
          <BodyText gutter={GUTTER}>
            Our NOC pro-actively manages and monitors your network so
            that if issues pop-up they can be addressed in real-time. Most
            issues, if they occur, are resolved with minimal if any
            interruptions to your work day.
          </BodyText>
        </TitledText>
        <TitledText title='Security Operation Center (SOC)'>
          <BodyText>
            Are you being attacked? Is someone trying to get to your
            important files or take down your network? Our SOC
            pro-actively manages security threats. We mitigate them
            so you never have to think about them.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/managed-services-05.jpg' alt='Cyber Security' gutter>
        <TitledText title='Cyber Security'>
          <BodyText gutter={GUTTER}>
            Cyber Security is no longer just monitoring with live personnel.
            We implement hardware and software along with our security
            personnel to ensure most, if not all, risks are averted at the
            most granular level. We also educate the end-user on best
            practices.
          </BodyText>
        </TitledText>
        <TitledText title='Patch Management'>
          <BodyText>
            We pro-actively manage all related patches, software and firmware
            updates, virus definitions, and anything else related to
            ensure your whole IT environment is always protected and
            up-to-date.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/managed-services-06.jpg' reverse alt='Third Party Application Management'>
        <TitledText title='Third Party Application Management'>
          <BodyText gutter={GUTTER}>
            Most businesses use specialized software locally or in the cloud.
            When something goes wrong or an update is needed, we work
            with your vendors to ensure the proper functionality of these
            mission critical products.
          </BodyText>
        </TitledText>
        <TitledText title='Vendor Management'>
          <BodyText>
            Phone system, fiber, cable, or last mile bandwidth company
            have you scratching your head when something goes wrong?
            We manage the relationship and get things back to normal so
            you don’t have to. One less thing to worry about.
          </BodyText>
        </TitledText>
      </ImageSection>
    </ContentTemplate>
  );
}