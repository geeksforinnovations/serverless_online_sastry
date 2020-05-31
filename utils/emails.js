var axios = require('axios');

module.exports.sendBookingReceivedEmailToPujari = async (pujariEmailIdArray, bookingId) => {
    let bccArray = pujariEmailIdArray.map((emailId) => {
        return { "email": emailId }
    });
    const poojariEmailData = {
        "to": process.env.EMAIL_SERVICES_ADMIN_EMAIL,
        "from": process.env.EMAIL_SERVICES_FROM_EMAIL,
        "cc": "vinay.ananthu@gmail.com",
        "bcc": bccArray,
        "templateId": "d-0fcf2cbbf1754aaf84d24bb9bb3ae369",
        "data": {
            "parm1": bookingId
        }
    }
    console.log(poojariEmailData);
    await postToEmailService(poojariEmailData);
}

module.exports.sendBookingConfirmationToCustomer = async (booking) => {

    const poojariEmailData = {
        "to": booking.email,
        "from": process.env.EMAIL_SERVICES_FROM_EMAIL,
        "cc": process.env.EMAIL_SERVICES_ADMIN_EMAIL,
        "templateId": "d-3d362feadf224179807b3b2298957106",
        "data": {
            "parm1": booking.email,
            "parm2": booking.customerName
        }
    }
    console.log(poojariEmailData);
    await postToEmailService(poojariEmailData);
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