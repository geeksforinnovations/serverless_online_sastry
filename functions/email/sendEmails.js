const emailService = require('./mail.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {  
    const emailBody = JSON.parse(event.body);
    const sgMail = require('@sendgrid/mail');
    console.log(event.body);
    console.log(emailBody.to);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: emailBody.to ,
  from: emailBody.from,
  cc: emailBody.cc,
  bcc:emailBody.bcc,
  subject:emailBody.subject,
  text: emailBody.text,
  html: emailBody.html,
};

// { sample payload
//   "to": "aksanudeep@gmail.com",
//   "from": "geeks4innovations@gmail.com",
//   "cc" : "manikumarkv@gmail.com",
//   "bcc" : "vinay.ananthu@gmail.com",
//   "subject": "Reservation pending ",
//   "text": "Sample static test",
//   "html": "<strong>please ignore</strong>"
// }
    return await sgMail.send(msg);;
  } catch (error) {
    return helpers.failure({ message: error.response.body });
  }

};
