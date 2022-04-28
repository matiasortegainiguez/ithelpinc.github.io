import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

export default () => {

  return (
    <ContentTemplate title='Terms of Use'>
      <TitledText title='Terms And Conditions' largeTitle>
        <BodyText gutter={GUTTER}>
          This document contains the terms and conditions that govern any and all use of the website ITHelpInc.com.
        </BodyText>
      </TitledText>

      <TitledText title='DEFINITIONS'>
        <BodyText >
          This document contains the terms and conditions that govern any and all use of the website ITHelpInc.com.
        </BodyText>
        <BodyText>
          “Agreement” means the Terms and Conditions contained in this document.
        </BodyText>
        <BodyText>
          “You” means the customer entering into this Agreement.
        </BodyText>
        <BodyText>
          “Site” means ITHelpInc.com or any sub-domains or other sites contained within those domains.
        </BodyText>
        <BodyText>
          “Content” means any information posted to, made available on, or transmitted via the Site, including without
          limitation any video, audio, images, emails, public or private messages, or other text, whether publicly
          accessible or hidden from public view.
        </BodyText>
        <BodyText>
          “Service” means any and all access to the Site and functionality provided via the Site, including without
          limitation searching, sharing, uploading, posting and viewing Content, data feeds, advertisements, and
          applications.
        </BodyText>
        <BodyText gutter={GUTTER}>
          “User” means any individual, corporation or other entity registered with an account name on the Site.
        </BodyText>
      </TitledText>

      <TitledText title='ACCEPTANCE OF TERMS AND CONDITIONS'>
        <BodyText gutter={GUTTER}>
          By using or visiting the Site or any Services, you hereby acknowledge that you have read and accept the terms
          of this Agreement and that you agree to be bound thereby. If you do not agree to any of the terms of this
          Agreement, you must immediately cease all use of the Site and all Services.
        </BodyText>
      </TitledText>

      <TitledText title='PRIVACY POLICY'>
        <BodyText gutter={GUTTER}>
          Please review IT Help’s Privacy Policy, as its terms are incorporated into and considered part of this
          Agreement. IT Help is committed to safeguarding your privacy pursuant to our Privacy Policy.
        </BodyText>
      </TitledText>

      <TitledText title='USE AND RESPONSIBILITIES'>
        <BodyText>
          By accessing or using the Site, you represent that: you have the legal capacity to enter into this Agreement;
          you  have read and understand the terms and conditions in this Agreement; and you accept and will abide by
          all of the terms and conditions in this Agreement. If you are creating or accessing an account for a User
          that is a corporation or other entity, you also agree that you are authorized to represent that entity and to
          bind that entity to this Agreement.
        </BodyText>
        <BodyText>
          No third-party benefit is created or in any way implied through your acceptance of this Agreement or use of
          the Site. This Agreement may not be assigned by you to any third party.
        </BodyText>
        <BodyText gutter={GUTTER}>
          This Agreement may be modified at IT Help’s discretion at any time; please check back frequently to review any
          such changes. Your continued use of the Site constitutes acceptance of any changes to the Agreement.
        </BodyText>
      </TitledText>

      <TitledText title='CONTENT AND FEES'>
        <BodyText>
          By posting or transmitting any Content to any part of the Site, you agree to grant IT Help a non-exclusive,
          irrevocable, perpetual, worldwide, sub-licensable, transferable, royalty-free license to exercise any
          intellectual property rights you may have in the Content. This license includes without limitation any
          copyright, publicity, database and moral rights (and national equivalents of each of the foregoing) that you
          may have in the Content, in any media now known or used in the future.
        </BodyText>
        <BodyText>
          By posting or transmitting any Content to any part of the Site, you represent and warrant to IT Help that you
          possess sufficient authority, right, title and interest to such Content as is necessary, or are otherwise
          legally entitled, to grant the foregoing license to IT Help. You agree that any Content you post or transmit
          to any part of the Site will not contain third party copyrighted material, or material subject to any other
          third party proprietary rights, unless you have permission from the rightful owner of the material or you are
          otherwise legally entitled to post the material and to grant the foregoing license to IT Help.
        </BodyText>
        <BodyText>
          You recognize that the Site may contain links to third party websites. These links do not constitute
          endorsement of the contents of third party websites by IT Help, and are provided solely for your convenience.
          IT Help makes no representations as to the content, availability, or accuracy of third party websites and is
          not responsible for any materials on such sites. You agree that IT Help is not liable for any losses or
          damages that you may suffer by accessing linked third party websites, and that you do so at your own risk.
        </BodyText>
        <BodyText gutter={GUTTER}>
          IT Help reserves the right to remove any Content from the Site without prior notice to you or to any third
          party.
        </BodyText>
      </TitledText>

      <TitledText title='USER CONDUCT'>
        <BodyText>
          You agree that you will not:
        </BodyText>
        <BodyText>
          <ul>
            <li>use the Service for any purposes contrary to applicable laws or regulations;</li>
            <li>use the Service to post, email, link to, or otherwise transmit, communicate, or make available any
            material that:
            <ul>
                <li>is offensive, obscene, pornographic, discriminatory, abusive, defamatory, libelous, harassing,
                threatening, menacing, or otherwise harmful;</li>
                <li>is likely to harm IT Help’s computer systems or any User’s or third party’s computer systems,
                including without limitation material containing any malware, spyware, virus, worm, Trojan horse, or
                other data or code that may cause any defect, error, malfunction, corruption, denial of service, or
                other undesired modification;</li>
                <li>is “spam,” “junk mail,” “chain letters,” “pyramid schemes,” or any other manner of improper
                solicitation;</li>
                <li>infringes any copyright, trademark, patent, or other intellectual property right, whether it belongs
                to IT Help or to a third party; or</li>
                <li>would harm minors in any way, including without limitation material that violates child pornography
                laws, child sexual exploitation laws, or laws prohibiting the depiction of minors engaged in sexual
                conduct;</li>
              </ul>
            </li>
            <li>access, collect, attempt to access or collect, or solicit any information about another User, including
            without limitation another User’s account name, password, email address, or any personal information,
            without that User’s explicit knowledge and consent;</li>
            <li>forge headers or other elements of network transmissions to disguise the origin of any material
            transmitted through the Service to IT Help or to any other User;</li>
            <li>upload or attempt to upload content to another User’s account by any method without that User’s explicit
            authorization and consent;</li>
            <li>override or attempt to override any security measure or component implemented on the Site;</li>
            <li>create a user account purporting to describe a fictional person or character, any individual other than
            yourself, or any entity other than one whom you have been authorized to represent;</li>
            <li>use any automated software or scripts to access any web pages on the Site; or</li>
            <li>resell the Service or any portion of the Service to any third party.</li>
          </ul>
        </BodyText>
        <BodyText gutter={GUTTER}>
          IT Help reserves the right to limit, temporarily suspend, or terminate any Services or User accounts, block
          access to the Site, remove Content, or take any other technical and legal steps if it determines in its sole
          judgment that any User or other individual or entity is using the Site in a manner that may create legal
          liabilities or technical problems, or is acting inconsistently with this Agreement and IT Help other policies.
          IT Help also reserves the right to cancel unconfirmed or inactive accounts at its discretion.
        </BodyText>
      </TitledText>

      <TitledText title='INDEMNIFICATION'>
        <BodyText gutter={GUTTER}>
          You agree to indemnify, defend, and hold harmless IT Help, its managers, officers, employees, agents, members,
          and third-party information providers, from and against all claims, expenses, liabilities, losses, damages and
          costs (including without limitation direct, indirect, incidental, consequential, punitive and exemplary
          damages) resulting from or arising out of (a) any Content that you post to your account or otherwise transfer
          to or through the Site, (b) use or misuse of the Site by you or by any other person accessing the site using
          your account, (c) any violation of this Agreement, or (d) any violation of any third party’s rights, including
          infringement of any third party’s intellectual property rights or misappropriation of any third party’s trade
          secrets.
        </BodyText>
      </TitledText>

      <TitledText title='DISCLAIMER OF WARRANTY'>
        <BodyText gutter={GUTTER}>
          THE SERVICE AND ALL RELATED CONTENT AND OTHER INFORMATION IS PROVIDED SOLELY ON AN “AS IS” BASIS. IT Help
          EXPRESSLY DISCLAIMS ANY AND ALL EXPRESS, IMPLIED AND STATUTORY WARRANTIES, INCLUDING BUT NOT LIMITED TO
          WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE. IT Help MAKES NO
          GUARANTEES OF RELIABILITY, AVAILABILITY, SECURITY, COMPATIBILITY, PERFORMANCE, OR TIMELINESS OF SERVICE. IT Help
          DOES NOT WARRANT OR REPRESENT THAT ANY CONTENT OR OTHER INFORMATION RELATED TO THE SERVICE WILL BE ACCURATE OR
          ERROR-FREE. IT Help ADDITIONALLY DOES NOT WARRANT THAT THE FUNCTIONALITY PROVIDED BY THE SERVICE WILL BE FREE
          FROM ERRORS, VIRUSES, OR ANY OTHER HARMFUL COMPONENTS.
        </BodyText>
      </TitledText>

      <TitledText title='LIMITATION OF LIABILITY'>
        <BodyText>
          IN NO EVENT SHALL IT Help BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMITATION ANY INCIDENTAL,
          CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE OR INDIRECT DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM
          BUSINESS INTERRUPTION OR LOST OR CORRUPTED DATA) RESULTING FROM OR IN CONNECTION WITH THE SITE OR YOUR USE OF
          THE SITE OR ITS CONTENT.
        </BodyText>
        <BodyText gutter={GUTTER}>
          IN THE EVENT THAT APPLICABLE LAW DOES NOT ALLOW SOME OF THE ABOVE EXCLUSIONS, IT Help’S LIABILITY ARISING IN
          CONNECTION WITH THE SITE OR YOUR USE OF THE SITE OR ITS CONTENT SHALL IN NO EVENT EXCEED $100, REGARDLESS OF
          THE CAUSE OF ACTION (WHETHER IN TORT, CONTRACT, BREACH OF WARRANTY, OR OTHERWISE).
        </BodyText>
      </TitledText>

      <TitledText title='LAW AND FORUM FOR DISPUTES'>
        <BodyText gutter={GUTTER}>
          This Agreement shall be governed by and construed in accordance with the laws of the State of New Jersey,
          without regard to conflict of law provisions. You agree that any dispute arising in connection with or under
          this Agreement shall be resolved by binding final arbitration according to the rules of the American
          Arbitration Association. Such arbitration will be held in State of New Jersey, with a written decision and
          legal reasoning by the arbitrator available at either party’s request. Arbitration fees and reasonable
          attorneys’ fees for both parties shall be borne by the party that ultimately loses. You also agree that any
          party may obtain injunctive relief, orders to compel arbitration, and orders to enforce arbitral awards in
          any court of competent jurisdiction.
        </BodyText>
      </TitledText>
    </ContentTemplate>
  );
}