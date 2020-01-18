// const serverless  = require('serverless-http');
// const AWS         = require('aws-sdk');
// const dbModels = require('../../models')
// const helpers = require("../../utils/helpers");


var ses = new AWS.SES();

module.exports.send = (event, context, callback) => {
    return "hello"
  //const data = JSON.parse(event.body);

  const params = {
    Destination: {
      ToAddresses: [ "manikumarkv@gmail.com" ],
    },
    Message: {
      Subject: {
        Data: 'test subject',//data.subject,
        Charset: 'UTF-8'
      },
      Body: {
        Text: {
          Data: 'Test', // data.text,
          Charset: "UTF-8"
        }
      }
    },
    Source: "manjunath.cycle@gmail.com"
  };

  ses.sendEmail(params, function(err) {
    callback((err)=>{
        console.log(err);
    }, {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ status: "success" })
    });
  })
};
