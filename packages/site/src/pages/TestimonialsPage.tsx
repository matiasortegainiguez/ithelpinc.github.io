import { makeStyles, Theme } from '@material-ui/core';
import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { TitledText } from '../components/02-molecules/TitledText';
import { ContentTemplate } from '../templates/ContentTemplate';

const useStyles = makeStyles((theme: Theme) => ({
  gutter: {
    '& li': {
      marginBottom: '1rem'
    }
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <ContentTemplate title='Testimonials' subTitle='Woohoo, they really like us!'>
      <ImageSection image='/images/testimonials-01.jpg' alt='Miss America' gutter hrefTo='https://www.missamerica.org'>
        <TitledText title='Managed IT Customers'>
          <BodyText>
            IT Help has been a tremendous asset to The Miss America
            Organization. We have a small staff managing an infrastructure
            of local, state, and national assets, including a live national
            broadcast. Our technology assistance has to be creative, up to
            date in the latest offerings, maintain security, be available to
            handle issues at a moment’s notice, explain IT needs, and do it all
            on a reasonable budget for a non-profit. Harry and his team have
            it all and we are fortunate to have them on The Miss America
            team!
        </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/testimonials-02.jpg' reverse alt='Jason' gutter hrefTo='https://kneadhd.com'>
        <TitledText title='Jason'>
          <BodyText>
            I have been working with IT Help for many years. They are incredibly
            thorough, relentless towards fixing issues and great at setting
            up our systems to ensure we’re able to operate without interruption.
            They are patient, kind, and available whenever we
            need them. I couldn’t recommend them enough.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/testimonials-03.jpg' alt='Margaret' gutter>
        <TitledText title='Margaret'>
          <BodyText>
            In my 40+ years of owning and running a recruitment firm in
            New York City, I have never experienced the dedication and
            sense of responsibility of IT Help Inc. From the president, Harry
            Goyal, who has advised and kept our computer systems
            running smoothly for many years, to his entire staff who treat a
            client kindly and professionally, I highly recommend this
            company.
        </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/testimonials-04.jpg' reverse alt='Arlene' gutter>
        <TitledText title='Arlene'>
          <BodyText>
            ITH has been the computer consultant for our business
            network for several years, we are extremely pleased with the
            rapid response we receive when we are having any computer
            problems and how proactive they are in keeping our network
            up and running. We have had the privilege to work with some
            of the tech support people for several years and have been very
            happy with their services as well. I highly recommend IT Help.
          </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/testimonials-05.jpg' alt='Remote IT Staffing Customers'>
        <TitledText title='Remote IT Staffing Customers'>
          <BodyText>
            <ul className={classes.gutter}>
              <li>
                “Stan has been invaluable to us. Just want to send him
                something to show how much we appreciate his work.
                Is there a local restaurant or pub he likes? We’ll send him
                a gift card. Thanks again. You guys rock.”
              </li>
              <li>
                “Thanks for the call the other day. Just wanted you to know we
                are very satisfied with Bill. He is doing an excellent job and stepping
                up to help our team. He has been a great addition!”
              </li>
              <li>
                “He is hands down our best Engineer. I wish I had made the
                decision to hire through you sooner.”
              </li>
            </ul>
          </BodyText>
        </TitledText>
      </ImageSection>
    </ContentTemplate>
  );
}