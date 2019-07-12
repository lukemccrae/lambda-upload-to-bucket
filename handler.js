'use strict';
var AWS = require('aws-sdk');

const BUCKET = 'csv-to-json-intuit-challenge';
const OBJECTKEY = 'file.txt';

module.exports.hello = async event => {
  var params = {
   ACL: "authenticated-read",
   Body: JSON.stringify({csv: event.body},null,2),
   Bucket: BUCKET,
   Key: "csv"
  };
  s3.putObject(params, function(err, data) {
    if (err) {
      return {
        body: err
      }
    } // an error occurred
    else     console.log(data);           // successful response
    /*
    data = {
     ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
     VersionId: "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr"
    }
    */
  });
  return {
    statusCode: 200,
    body: err),
  }
};
