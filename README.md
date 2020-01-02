## Welcome to S3Website

### What's this project for?

Deploy your own static website on Amazon S3 without requiring any host.

### Prerequisite
- AWS account id 
- Domain name (only if you want to use your own domain)

### How to use
- Create an IAM user in your AWS account
- Grant permissions to your AWS account
- Get credentials for that user and store locally
- Modify `resources/website.json`
   - accountId: your AWS account id
   - region: AWS region
   - domainName: your domain name
   - contentPath: the path of your website content, you can use the default value and copy your website content to `resources/website` folder
- run command `npm run build && cdk synth && cdk bootstrap && cdk deploy S3WebsiteStack` to deploy your website
- Change your CNAME www record to point to the S3 bucket   

### Update website content only
- TODO

