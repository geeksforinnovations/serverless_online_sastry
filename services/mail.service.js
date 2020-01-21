const AWS = require("aws-sdk");
const ses = new AWS.SES();
const appSettingsService = require('./appSettings.service')

module.exports.send = async function(from, to, subject, body) {
  const request = getMailRequest(from, to, subject, body);
  return await ses.sendEmail(request).promise();
};

function getMailRequest(from, to, subject, body) {
  return {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8"
      },
      Body: {
        Text: {
          Data: body,
          Charset: "UTF-8"
        }
      }
    },
    Source: from
  };
}

async function getEmaildetails() {
return await appSettingsService.getSettingByKey('emailFrom')
}
