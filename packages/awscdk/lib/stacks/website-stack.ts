import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import { Configuration } from "../config";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';

export class WebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const stage = Configuration.getAppConfig().env.STAGE;

    const websiteBucket = new s3.Bucket(this, `WebsiteBucket-${stage}`, {
      bucketName: `vxtraders-website-bucket-${stage}`,
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    const distribution = new cloudfront.Distribution(this, `WebsiteDistribution-${stage}`, {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: cdk.Duration.minutes(1),
        },
      ],
    });

    new s3Deployment.BucketDeployment(this, `DeployWebsite-${stage}`, {
      sources: [s3Deployment.Source.asset("../frontend/dist")],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    new cdk.CfnOutput(this, "WebsiteURL", {
      value: distribution.distributionDomainName,
      description: "URL of the CloudFront distribution",
    });
  }
}
