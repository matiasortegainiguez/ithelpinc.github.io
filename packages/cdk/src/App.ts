import { App } from '@aws-cdk/core';
import { Stage } from './shared';
import { SiteStack } from './stacks/SiteStack';
import { findStage } from './support';

const app = new App();
const stage: Stage = findStage(process.env.CDK_STAGE);

// tslint:disable-next-line: no-unused-expression
new SiteStack(app, 'ITHelpStack', {
  stage,
  stackName: `ithelp-${stage.name}`,
  env: {
    account: stage.account,
    region: stage.region,
  },
});
