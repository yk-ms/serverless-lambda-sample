'use strict';

const aws = require('aws-sdk');
aws.config.region = 'ap-northeast-1';
const bucketName = 'serverless-lambda-sample';
var s3 = new aws.S3();

module.exports.hello = async (event, _context) => {
  const jsonObject = await getJson();
  const apiKey = process.env.API_KEY
  const response = {
    "apiKey": apiKey,
    "X-Api-Key": event['headers']['X-Api-Key']
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
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
