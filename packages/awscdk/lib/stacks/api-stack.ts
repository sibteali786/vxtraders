import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Configuration } from '../config';

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const stage = Configuration.getAppConfig().env.STAGE;

    const handler = new lambda.Function(this, `ApiLambda-${stage}`, {
      functionName: `ApiLambda-${stage}`,
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('../backend/build'),
      handler: 'index.trpcHandlerLambda',
      environment: Configuration.getAppConfig().env,
      timeout: cdk.Duration.seconds(60),
    });

    const api = new apigateway.RestApi(this, `ApiGateway-${stage}`, {
      restApiName: `ApiGateway-${stage}`,
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
    });

    const integration = new apigateway.LambdaIntegration(handler, {
      proxy: true,
    });

    api.root.addResource('{proxy+}').addMethod('ANY', integration);

    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API Gateway',
    });
  }
}