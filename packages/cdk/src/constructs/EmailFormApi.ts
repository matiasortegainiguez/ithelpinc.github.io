import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { Bucket } from '@aws-cdk/aws-s3';
import { ISecret, Secret } from '@aws-cdk/aws-secretsmanager';
import { Topic } from '@aws-cdk/aws-sns';
import { Construct } from '@aws-cdk/core';
import { SnsEmailFunction } from '@codification/cdk-sns-email-forms';
import { DeployProps } from '../shared';

export interface EmailFormApiProps extends DeployProps {
  templateBucket: Bucket;
  snsTopic: Topic;
}

export class EmailFormApi extends RestApi {
  public readonly apiDomainName: string;

  public constructor(scope: Construct, id: string, props: EmailFormApiProps) {
    super(scope, id, {
      deployOptions: {
        stageName: props.stage.name,
      },
    });

    const secret: ISecret = Secret.fromSecretCompleteArn(
      this,
      id + 'Secrets',
      `arn:aws:secretsmanager:${props.stage.region}:${props.stage.account}:secret:ITHelpSite-tqFrLq`,
    );

    const snsFunction: SnsEmailFunction = new SnsEmailFunction(this, 'SnsEmailHandler', {
      ...props,
      recipientEmail: props.stage.emailRecipient,
      recaptchaConfig: {
        secretKey: 'GoogleRecaptchaSecretKey',
        secret,
      },
    });
    const apiEndpoint = this.root.addResource('api').addResource('send');
    const apiIntegration = new LambdaIntegration(snsFunction);
    apiEndpoint.addMethod('POST', apiIntegration);
    apiEndpoint.addMethod('OPTIONS', apiIntegration);

    const url: string = this.url.substr(this.url.indexOf('://') + 3);
    this.apiDomainName = url.substring(0, url.indexOf('/'));
  }
}
