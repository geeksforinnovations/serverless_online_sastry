var axios = require('axios');

module.exports.sendBookingReceivedEmailToPujari = async (pujariEmailIdArray, bookingId) => {
    let bccArray = pujariEmailIdArray.map((emailId) => {
        return { "email": emailId }
    });
    const emailData = {
        "to": process.env.EMAIL_SERVICES_ADMIN_EMAIL,
        "from": process.env.EMAIL_SERVICES_FROM_EMAIL,
        "cc": "vinay.ananthu@gmail.com",
        "bcc": bccArray,
        "templateId": "d-0fcf2cbbf1754aaf84d24bb9bb3ae369",
        "data": {
            "parm1": bookingId
        }
    }
    console.log(emailData);
    await postToEmailService(emailData);
}



var postToEmailService = async (data) => {
    const url = process.env.EMAIL_SERVICES_URL || "http://localhost:4000/devlop/sendEmailsByTemplate";
    try {
        const result = await axios({
            method: 'post',
            url: url,
            headers: {
                "Content-Type": "application/json",
            },
            data: data
        });
        console.log(result);
    } catch (e) {
        console.log(e+"");
    }

}