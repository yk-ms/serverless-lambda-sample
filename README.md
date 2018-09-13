```
$ node -v
v10.7.0

$ aws --version
aws-cli/1.11.128 Python/2.7.10 Darwin/16.7.0 botocore/1.5.91

$ npm install -g serverless
$ serverless -v
1.30.3

$ sls create -t aws-nodejs
$ ls
handler.js     serverless.yml

$ sls deploy --aws-profile profile -v
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (387 B)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
...............
Serverless: Stack update finished...
Service Information
service: aws-nodejs
stage: dev
region: ap-northeast-1
stack: aws-nodejs-dev
api keys:
  None
endpoints:
  None
functions:
  hello: aws-nodejs-dev-hello

$ sls invoke -f hello --aws-profile profile
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":{}}"
}
```
