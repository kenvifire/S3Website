import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import S3Website = require('../lib/s3_website-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new S3Website.S3WebsiteStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});