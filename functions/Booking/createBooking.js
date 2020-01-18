
const service = require('./booking.service')

module.exports = async (event, context, callback) => {
    const booking = JSON.parse(event.body);
    //  var booking = {
    //             pujaId: 1, languageId: 1, name: 'Manjunath', phoneNumber: '123456',
    //             bookingDate: new Date(), addressLine1: 'lingampally', addressLine2: 'MIG',
    //             requirePujaType:'Online',videoCallUserName:'test@skype',status:'Active'
    //         }; 
    return service.createBooking(booking);
};