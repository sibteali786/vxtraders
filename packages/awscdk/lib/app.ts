import * as cdk from "aws-cdk-lib";
import { CronStack } from "./stacks/cron-stack";
import { Configuration } from "./config";

export class VxTradersCdkApp extends cdk.App {
  readonly cronStack: CronStack;

  constructor(props: cdk.AppProps) {
    super(props);

    const stackProps: cdk.StackProps = {
      terminationProtection: true,
    };

    const stage = Configuration.getAppConfig().env.STAGE;
    this.cronStack = new CronStack(this, `CronStack-${stage}`, stackProps);
  }
}
