import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { BucketWebsiteTarget } from '@aws-cdk/aws-route53-targets';
import { Construct } from '@aws-cdk/core';
import { toHostedZoneDomain } from '../shared';
import { RedirectBucket } from './RedirectBucket';

export interface Route53RedirectRecordProps {
  fromDomain: string;
  toDomain: string;
}

export class Route53RedirectRecord extends ARecord {
  public constructor(scope: Construct, id: string, { fromDomain, toDomain }: Route53RedirectRecordProps) {
    const bucket = new RedirectBucket(scope, `${id}-Bucket`, { fromDomain, toDomain });

    super(scope, id, {
      target: RecordTarget.fromAlias(new BucketWebsiteTarget(bucket)),
      zone: HostedZone.fromLookup(scope, id + 'HostedZone', { domainName: toHostedZoneDomain(fromDomain) }),
      recordName: `${fromDomain}.`,
    });
  }
}
