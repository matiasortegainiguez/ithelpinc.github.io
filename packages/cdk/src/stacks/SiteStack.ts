import { Certificate, ICertificate } from '@aws-cdk/aws-certificatemanager';
import { OriginAccessIdentity } from '@aws-cdk/aws-cloudfront';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { Topic } from '@aws-cdk/aws-sns';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import * as path from 'path';
import { EmailFormApi, Route53RedirectRecord, SecureCloudFrontBucket } from '../constructs';
import { SiteDistribution } from '../constructs/SiteDistribution';
import { AUXILIARY_DOMAINS, DeployProps } from '../shared';
import { isProd } from '../support';

export class SiteStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps & DeployProps) {
    super(scope, id, props);

    const originAccessId: OriginAccessIdentity = new OriginAccessIdentity(this, 'OrginAccessId');
    const assetBucket: SecureCloudFrontBucket = new SecureCloudFrontBucket(this, 'AssetBucket', { originAccessId });
    const templateBucket: SecureCloudFrontBucket = new SecureCloudFrontBucket(this, 'TemplateBucket');
    const snsTopic: Topic = new Topic(this, 'EmailFormTopic');

    const emailApi: EmailFormApi = new EmailFormApi(this, 'EmailApi', {
      stage: props.stage,
      snsTopic,
      templateBucket,
    });

    const certificateId: string = props.stage.domain.certificateId;
    const certificate: ICertificate = Certificate.fromCertificateArn(
      this,
      'SSLCert',
      `arn:aws:acm:us-east-1:${props.stage.account}:certificate/${certificateId}`,
    );

    const distribution = new SiteDistribution(this, 'Distribution', {
      stage: props.stage,
      assetBucket,
      emailApi,
      certificate,
      originAccessId,
    });

    // tslint:disable-next-line: no-unused-expression
    new BucketDeployment(this, 'TemplateDeployment', {
      sources: [Source.asset(path.resolve('../site/templates'))],
      destinationBucket: templateBucket,
    });

    // tslint:disable-next-line: no-unused-expression
    new BucketDeployment(this, 'SiteDeployment', {
      sources: [Source.asset(path.resolve('../site/dist'))],
      destinationBucket: assetBucket,
      distribution,
      distributionPaths: ['/index.html', '/manifest.webmanifest'],
    });

    if (isProd(props.stage)) {
      AUXILIARY_DOMAINS.map(
        (domain, index) =>
          new Route53RedirectRecord(this, 'RedirectRecord' + index, {
            fromDomain: domain,
            toDomain: props.stage.domain.hostedZone,
          }),
      );
    }
  }
}
