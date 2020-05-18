const emailService = require('./mail.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {  
    const emailBody = JSON.parse(event.body);
    const sgMail = require('@sendgrid/mail');
    console.log(event.body);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = [{
  to: emailBody.to ,
  from: emailBody.from,
  cc: emailBody.cc,
  bcc:emailBody.bcc,
  templateId: 'd-3d362feadf224179807b3b2298957106',
  dynamic_template_data: {
    name: emailBody.name,
    orderId: emailBody.orderId,
  },
},
{
  to: emailBody.admin ,
  from: emailBody.from,
  cc: emailBody.cc,
  bcc: emailBody.poojariEmails,
  templateId: 'd-0fcf2cbbf1754aaf84d24bb9bb3ae369',
  dynamic_template_data: {
    orderId: emailBody.orderId,
  },
},
];

// {
//   "to": "aksanudeep@gmail.com",
//   "admin": "aksanudeep@gmail.com",
//   "from": "geeks4innovations@gmail.com",
//   "cc" : "manikumarkv@gmail.com",
//   "bcc" : "vinay.ananthu@gmail.com",
//   "name": "AKs Ayyagari",
//   "poojariEmails" : [ "krish@intelsavvy.com", "krishayyagari4@gmail.com"],
//   "orderId": 123
// }
    return await sgMail.send(msg);;
  } catch (error) {
    return helpers.failure({ message: error.response.body });
  }

};
