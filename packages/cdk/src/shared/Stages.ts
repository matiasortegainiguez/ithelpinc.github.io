import { Level } from '@codification/cutwater-logging';

export interface Domain {
  readonly hostName?: string;
  readonly hostedZone: string;
  readonly certificateId: string;
}

export interface Stage {
  readonly name: string;
  readonly account: string;
  readonly region: string;
  readonly loggingLevel: Level;
  readonly domain: Domain;
  readonly emailRecipient: string;
}

export interface Stages {
  [name: string]: Stage;
}

const toDomain = (hostName?: string): Domain => ({
  hostName,
  hostedZone: 'ithelpinc.com',
  certificateId: '3d64beff-aa67-4c9b-a427-e918f1bc4045',
});

const toStage = (name: string, domain: Domain, emailRecipient: string, loggingLevel: Level = Level.DEBUG): Stage => ({
  name,
  account: '204466102509',
  region: 'us-west-2',
  loggingLevel,
  domain,
  emailRecipient,
});

export const DEV_STAGE_NAME: string = 'dev';
export const PROD_STAGE_NAME: string = 'prod';

export const DEV_STAGE: Stage = toStage(DEV_STAGE_NAME, toDomain('beta'), 'william@codification.org');
export const PROD_STAGE: Stage = toStage(PROD_STAGE_NAME, toDomain(), 'info@it-help.net', Level.WARN);

export const STAGES: Stages = {
  [DEV_STAGE_NAME]: DEV_STAGE,
  [PROD_STAGE_NAME]: PROD_STAGE,
};
