import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

export default () => {

  return (
    <ContentTemplate title='Privacy Policy'>

      <BodyText gutter={GUTTER}>
        We appreciate the opportunity to interact with you on the internet and are committed to protecting and
        safeguarding your privacy. The purpose of this Privacy Statement is to inform you about the types of
        information we might collect about you when you visit our Site, how we may use that information and whether
        we disclose that information to anyone. We never sell or give your personal information to third parties.
      </BodyText>

      <TitledText title='What Information We Collect And How We Use It'>
        <BodyText >
          Any information we collect on our Site generally falls into the Personally Identifiable Information category.
        </BodyText>
        <BodyText>
          Personally Identifiable Information: This refers to information that lets us know specifically who you are. In
          general, you can visit our Site without telling us who you are or revealing any Personally Identifiable
          Information.
        </BodyText>
        <BodyText gutter={GUTTER}>
          Ordering – When you place an order for products or services, we collect Personally Identifiable Information
          (such as name, contact and billing information, credit card, and other transaction information). We use this
          information to deliver your order, process payment, and to communicate with you about the status of your
          order. Credit card information submitted with your order is used only for payment processing only.
        </BodyText>
      </TitledText>

      <TitledText title='Sharing Your Information'>
        <BodyText>
          Except as disclosed in this Privacy Statement, we do not sell, trade, rent, or otherwise retransmit any
          Personally Identifiable Information we collect online unless we have your permission. Any Personally
          Identifiable Information you provide to us will be used for Centaurus to contact you and for any purchases
          you make. Your purchases and retained in hard copy form of the original invoice as well as within our database
          system, which generates our invoices.
        </BodyText>
        <BodyText gutter={GUTTER}>
          From time to time, we may be required to provide Personally Identifiable Information in response to court
          order, subpoena, or government investigation. We also reserve the right to report to law enforcement agencies
          any activities that we in good faith believe to be unlawful. We may release Personally Identifiable
          Information when we believe that such release is reasonably necessary to enforce or apply our Limited Warranty
          or to protect the rights, property, and safety or others and ourselves.
        </BodyText>
      </TitledText>

      <TitledText title='Links To Other Web Sites'>
        <BodyText gutter={GUTTER}>
          Links to third-party websites may be provided solely for your information and convenience, or to provide
          additional information for various other goods and services. This privacy policy applies to the Site you are
          currently visiting, if you use these links, you will leave our Site. This Privacy Statement does not cover the
          information practices of those websites linked to our Site, nor do we control their content or privacy
          policies. We suggest that you carefully review the privacy policies of each site you visit for more details
          about how they use and store your information.
        </BodyText>
      </TitledText>

      <TitledText title='Changes To This Statement'>
        <BodyText gutter={GUTTER}>
          Any updates or changes to the terms of this Privacy Statement will be posted here on our Site and the date of
          the newest version posted below. Please check back frequently, especially before you submit any Personally
          Identifiable Information at our Site, to see if this Privacy Statement has changed. By using our Site, you
          acknowledge acceptance of this Privacy Statement in effect at the time of Use.
        </BodyText>
      </TitledText>

      <TitledText title='Contact Us'>
        <BodyText gutter={GUTTER}>
          If you have any concerns about our use of your information or about this Privacy Statement, please send an
          email to info@ithelpinc.com. We will make every reasonable effort to address your concerns and remedy any
          problems you bring to our attention.
        </BodyText>
      </TitledText>
    </ContentTemplate>
  );
}