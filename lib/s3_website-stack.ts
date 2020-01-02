import cdk = require('@aws-cdk/core');
import s3 = require("@aws-cdk/aws-s3");
import s3deploy = require("@aws-cdk/aws-s3-deployment");

export interface Config {
    accountId: string,
    region: string,
    domainName: string,
    contentPath: string
}

export class S3WebsiteStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, config: Config, props?: cdk.StackProps) {
        super(scope, id, props);

        const wwwWebsiteBucket = new s3.Bucket(this, 'bucket-' + config.domainName, {
            bucketName: config.domainName,
            publicReadAccess: true,
            websiteIndexDocument: 'index.html'

        });
        new s3deploy.BucketDeployment(this, 'DeployWebsite-' + config.domainName, {
            sources: [s3deploy.Source.asset(config.contentPath)],
            destinationBucket: wwwWebsiteBucket
        });

    }
}
