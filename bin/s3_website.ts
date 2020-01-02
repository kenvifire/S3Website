#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { S3WebsiteStack } from '../lib/s3_website-stack';

const app = new cdk.App();
new S3WebsiteStack(app, 'S3WebsiteStack');
