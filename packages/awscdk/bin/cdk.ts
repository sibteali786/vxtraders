#!/usr/bin/env node
import "source-map-support/register";
import { VxTradersCdkApp } from "../lib/app";
import { Configuration } from "../lib/config";

Configuration.init();
const stage = Configuration.getAppConfig().env.STAGE;

const app = new VxTradersCdkApp({
  context: {
    appName: `VxTradersCdkApp-${stage}`,
  },
});

app.synth();
