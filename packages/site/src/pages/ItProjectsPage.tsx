import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

export default () => {
  return (
    <ContentTemplate title='IT Projects & Deployments' subTitle='Planned, Implemented, & Delivered On-time.'>
      <ImageSection image='/images/it-projects-01.jpg' alt='IT Infrastructure Projects' gutter>
        <TitledText title='IT Infrastructure Projects'>
          <BodyText gutter={GUTTER}>
            Computers and Routers and Firewalls oh my! Add wi-fi
            devices, switches, patch panels, cameras, structured cabling…the
            list goes on and on. We handle all IT infrastructure projects from
            planning to installation. Let us be your one neck to choke.
          </BodyText>
        </TitledText>
        <TitledText title='Network Design & Implementation'>
          <BodyText>
            We will map and document your existing infrastructure if
            needed. We will also design and successfully implement new network
            environments, add new locations to an existing
            environment, etc.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/it-projects-02.jpg' reverse alt='Microsoft 365 Migration (Office 365)' gutter>
        <TitledText title='Microsoft 365 Migration (Office 365)'>
          <BodyText gutter={GUTTER}>
            Microsoft 365 has made it easier to move your e-mail
            communication into the cloud. We can move your existing
            on-premise or hosted Exchange to Microsoft 365 or deploy it
            from scratch seamlessly.
          </BodyText>
        </TitledText>
        <TitledText title='Virtualization & Cloud Technologies'>
          <BodyText>
            VMWare or Hyper-V? Azure or AWS? Virtual machines…what is
            this, The Matrix? Allow us to make sense of these technologies,
            implement, and manage them for you. If this already makes
            sense, we can pro-actively manage and maintain it for you.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/it-projects-03.jpg' alt='New Office Set-up & Relocation' gutter>
        <TitledText title='New Office Set-up & Relocation'>
          <BodyText gutter={GUTTER}>
            We will plan and implement a new IT environment at your new
            office or organize and project manage your relocation.
          </BodyText>
        </TitledText>
        <TitledText title='IT Procurement'>
          <BodyText>
            What should you buy, PC or MAC? You need new licenses or
            need to renew licenses for your Microsoft environment. My
            firewall is end of life (EOL)? I have to renew my Cisco licenses?
            Yes, you do. However, we can procure, manage, and make this
            easy for you.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/it-projects-04.jpg' reverse alt='Cyber Security Planning'>
        <TitledText title='Cyber Security Planning'>
          <BodyText gutter={GUTTER}>
            What hardware do you need to be cyber secure? Wait, you
            need software too? Oh, and you need to stay PCI, HIPAA, or
            SOX compliant? We can recommend and implement the right
            cyber security plan for you.
          </BodyText>
        </TitledText>
        <TitledText title='Network & Security Assessments'>
          <BodyText>
            How do you know your network is secure? Do you need an IT
            or Security Audit to remain compliant? No problem. We are
            happy to help.
          </BodyText>
        </TitledText>
      </ImageSection>
    </ContentTemplate>
  );
}