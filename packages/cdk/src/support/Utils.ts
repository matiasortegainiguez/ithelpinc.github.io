import { DEV_STAGE_NAME, Domain, PROD_STAGE_NAME, Stage, STAGES } from '../shared';

export const isProd = (stage: Stage): boolean => {
  return stage.name === PROD_STAGE_NAME;
};

export const findStage = (stage?: string): Stage => {
  return STAGES[stage || DEV_STAGE_NAME];
};

export const toDomainName = (stageOrDomain: Stage | Domain): string => {
  const domain =
    (stageOrDomain as Stage).name !== 'undefined' ? (stageOrDomain as Stage).domain : (stageOrDomain as Domain);
  return domain.hostName ? `${domain.hostName}.${domain.hostedZone}` : domain.hostedZone;
};
