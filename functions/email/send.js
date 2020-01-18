const AWS = require('aws-sdk');
const ses = new AWS.SES();

module.exports = async (event, context, callback) => {
  const params = {
    Destination: {
      ToAddresses: ["manjunath.cycle@gmail.com"],
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
    Source: "manikumarkv@gmail.com"
  };

  const result = await ses.sendEmail(params).promise()
  console.log('result', result)
  return 'hello'
};
