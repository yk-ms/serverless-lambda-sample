'use strict';

const aws = require('aws-sdk');
aws.config.region = 'ap-northeast-1';
const bucketName = 'serverless-lambda-sample';
var s3 = new aws.S3();

module.exports.hello = async (_event, _context) => {
  const jsonObject = await getJson();
  return {
    statusCode: 200,
    body: jsonObject.Body.toString(),
  };
};

async function getJson() {
  try {
    const params = {
      Bucket: bucketName,
      Key: 'sample.json'
    };
    return await s3.getObject(params).promise();
  } catch(err) {
    console.error(err);
  }
}
