import { OriginAccessIdentity } from '@aws-cdk/aws-cloudfront';
import { CanonicalUserPrincipal, Effect, PolicyStatement } from '@aws-cdk/aws-iam';
import { BlockPublicAccess, Bucket } from '@aws-cdk/aws-s3';
import { Construct, RemovalPolicy } from '@aws-cdk/core';

export interface SecureCloudfrontBucketProps {
  originAccessId: OriginAccessIdentity;
}

export class SecureCloudFrontBucket extends Bucket {
  public constructor(scope: Construct, id: string, props?: SecureCloudfrontBucketProps) {
    super(scope, id, {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    if (props) {
      const policy: PolicyStatement = new PolicyStatement({
        effect: Effect.ALLOW,
        resources: [`${this.bucketArn}/*`],
        actions: ['s3:GetObject'],
        principals: [new CanonicalUserPrincipal(props.originAccessId.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
      });
      this.addToResourcePolicy(policy);
    }
  }
}
