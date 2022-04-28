import { makeStyles, Theme } from '@material-ui/core';
import * as React from "react";
import { BodyText } from '../components/01-atoms/BodyText';
import { ImageSection } from '../components/02-molecules/ImageSection';
import { ProcessSection } from '../components/02-molecules/ProcessSection';
import { TitledText } from '../components/02-molecules/TitledText';
import { GUTTER } from '../settings/Variables';
import { ContentTemplate } from '../templates/ContentTemplate';

const useStyles = makeStyles((theme: Theme) => ({
  emphasis: {
    fontWeight: 700,
    color: theme.palette.primary.main
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <ContentTemplate title='Remote IT Staffing' subTitle='The Right Engineer for the Right Position at the Right Cost.'>
      <ImageSection image='/images/remote-staffing-01.jpg' alt='Our Engineers' gutter>
        <TitledText title='Our Engineers'>
          <BodyText gutter={GUTTER}>
            Our MSP Trained Engineers are committed to making a
            difference in your business. We provide them with all the
            necessary training and coaching to ensure your expectations
            are exceeded.
        </BodyText>
          <BodyText>
            Our Remote IT Staffing meets and exceeds client
            requirements. Our process helps you choose the best fit
            so our talented team becomes your talented team.
        </BodyText>
        </TitledText>
      </ImageSection>

      <ImageSection image='/images/remote-staffing-02.jpg' reverse alt='Benefits'>
        <TitledText title='Benefits'>
          <BodyText gutter={GUTTER}>
            IT Help's Remote IT Staffing <span className={classes.emphasis}>Will</span> Save You Money
          </BodyText>
          <BodyText>
            <ul className={classes.emphasis}>
              <li>Eliminate Upfront Hiring Costs.</li>
              <li>Decrease Turnover Costs.</li>
              <li>NO Back-End Burden (HR, TAX, BENEFITS, ETC.)</li>
              <li>Flexible Scheduling at No Additional Cost.</li>
              <li>Scale up or down as needed depending on business conditions or changes in the market.</li>
            </ul>
          </BodyText>
        </TitledText>
      </ImageSection>

      <ProcessSection />
    </ContentTemplate>
  );
}