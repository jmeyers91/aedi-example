#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AediCdkApp } from "@aedi/cdk";
import { app } from "../lib/app";

const cdkApp = new cdk.App();
const env: cdk.Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

new AediCdkApp({
  app,
  cdkApp,
  defaultStackProps: { env },
});
