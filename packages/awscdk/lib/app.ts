import * as cdk from "aws-cdk-lib";
import { CronStack } from "./stacks/cron-stack";
import { Configuration } from "./config";
import { WebsiteStack } from "./stacks/website-stack";
import { ApiStack } from "./stacks/api-stack";

export class VxTradersCdkApp extends cdk.App {
  readonly cronStack: CronStack;
  readonly websiteStack: WebsiteStack;
  readonly apiStack: ApiStack;

  constructor(props: cdk.AppProps) {
    super(props);

    const stackProps: cdk.StackProps = {
      terminationProtection: true,
    };

    const stage = Configuration.getAppConfig().env.STAGE;
    this.cronStack = new CronStack(this, `CronStack-${stage}`, stackProps);
    this.websiteStack = new WebsiteStack(this, `WebsiteStack-${stage}`, stackProps);
    this.apiStack = new ApiStack(this, `ApiStack-${stage}`, stackProps);

    this.websiteStack.addDependency(this.apiStack);
  }
}
