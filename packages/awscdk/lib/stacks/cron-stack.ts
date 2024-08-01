import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { Configuration } from "../config";

export class CronStack extends cdk.Stack {
  public readonly lambda: cdk.aws_lambda.Function;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const stage = Configuration.getAppConfig().env.STAGE;

    this.lambda = new cdk.aws_lambda.Function(this, `CronLambdaCdk-${stage}`, {
      functionName: `CronStackLambda-${stage}`,
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      code: cdk.aws_lambda.Code.fromAsset("../backend"),
      handler: "build/index.cronHandler",
      environment: Configuration.getAppConfig().env,
      timeout: cdk.Duration.seconds(60),
      tracing: cdk.aws_lambda.Tracing.ACTIVE,
    });

    const rule = new cdk.aws_events.Rule(this, `CronLambdaScheduleCdk-${stage}`, {
      ruleName: `CronLambdaSchedule-${stage}`,
      schedule: cdk.aws_events.Schedule.rate(cdk.Duration.hours(1)),
    });
    rule.addTarget(new cdk.aws_events_targets.LambdaFunction(this.lambda));
  }
}
