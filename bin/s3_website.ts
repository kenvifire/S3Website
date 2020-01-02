#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {Config, S3WebsiteStack} from '../lib/s3_website-stack';

let config: Config = require('../resources/website.json');

const env = {
    account: config.accountId,
    region: config.region
};

const app = new cdk.App();

new S3WebsiteStack(app, 'S3WebsiteStack', config, {env: env});
