import { BlockPublicAccess, Bucket } from '@aws-cdk/aws-s3';
import { Construct, RemovalPolicy } from '@aws-cdk/core';

export interface RedirectBucketProps {
  fromDomain: string;
  toDomain: string;
}

export class RedirectBucket extends Bucket {
  public constructor(scope: Construct, id: string, { fromDomain, toDomain }: RedirectBucketProps) {
    super(scope, id, {
      bucketName: fromDomain,
      removalPolicy: RemovalPolicy.DESTROY,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      websiteRedirect: {
        hostName: toDomain,
      },
    });
  }
}
