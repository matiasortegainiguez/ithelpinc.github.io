import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import {
  CloudFrontAllowedCachedMethods,
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  CloudFrontWebDistributionProps,
  HttpVersion,
  OriginAccessIdentity,
  OriginProtocolPolicy,
  PriceClass,
  SourceConfiguration,
  ViewerProtocolPolicy,
} from '@aws-cdk/aws-cloudfront';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';
import { IBucket } from '@aws-cdk/aws-s3';
import { Construct, Duration } from '@aws-cdk/core';
import { DeployProps } from '../shared';
import { toDomainName } from '../support';
import { EmailFormApi } from './EmailFormApi';

export interface AppDistributionProps extends DeployProps {
  originAccessId: OriginAccessIdentity;
  assetBucket: IBucket;
  emailApi: EmailFormApi;
  certificate: ICertificate;
}

export class SiteDistribution extends CloudFrontWebDistribution {
  public constructor(scope: Construct, id: string, props: AppDistributionProps) {
    const assetSource: SourceConfiguration = {
      s3OriginSource: {
        s3BucketSource: props.assetBucket,
        originAccessIdentity: props.originAccessId,
      },
      behaviors: [
        {
          isDefaultBehavior: true,
          compress: true,
          defaultTtl: Duration.days(100),
          minTtl: Duration.days(90),
          maxTtl: Duration.days(110),
          forwardedValues: {
            queryString: false,
          },
        },
      ],
    };

    const apiSource: SourceConfiguration = {
      customOriginSource: {
        domainName: props.emailApi.apiDomainName,
        originProtocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
      },
      originPath: `/${props.stage.name}`,
      behaviors: [
        {
          compress: true,
          forwardedValues: {
            queryString: true,
            headers: ['Accept', 'Referer', 'Authorization', 'Content-Type'],
          },
          pathPattern: 'api/*',
          defaultTtl: Duration.seconds(0),
          maxTtl: Duration.seconds(0),
          minTtl: Duration.seconds(0),
          allowedMethods: CloudFrontAllowedMethods.ALL,
          cachedMethods: CloudFrontAllowedCachedMethods.GET_HEAD,
        },
      ],
    };

    const distributionProps: CloudFrontWebDistributionProps = {
      httpVersion: HttpVersion.HTTP2,
      defaultRootObject: 'index.html',
      originConfigs: [assetSource, apiSource],
      errorConfigurations: [
        {
          errorCode: 404,
          errorCachingMinTtl: 300,
          responseCode: 200,
          responsePagePath: '/index.html',
        },
        {
          errorCode: 403,
          errorCachingMinTtl: 300,
          responseCode: 200,
          responsePagePath: '/index.html',
        },
      ],
      priceClass: PriceClass.PRICE_CLASS_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      viewerCertificate: {
        aliases: [toDomainName(props.stage)],
        props: {
          acmCertificateArn: props.certificate.certificateArn,
          sslSupportMethod: 'sni-only',
        },
      },
    };

    super(scope, id, distributionProps);

    // tslint:disable-next-line: no-unused-expression
    new ARecord(this, 'DomainName', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(this)),
      zone: HostedZone.fromLookup(scope, id + 'HostedZone', { domainName: `${props.stage.domain.hostedZone}.` }),
      recordName: `${toDomainName(props.stage)}.`,
    });
  }
}
