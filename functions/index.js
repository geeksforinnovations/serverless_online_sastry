'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')
const createCustomer = require('./transactions/createCustomer')
const payment = require('./transactions/payment')
const createPuja = require('./pujas/createPuja')
const updatePuja = require('./pujas/updatePuja')
const deletePuja = require('./pujas/deletePuja')
const createFaq = require('./FAQS/createFaq')
const updateFaq = require('./FAQS/updateFaq')
const deleteFaq = require('./FAQS/deleteFaq')
const readAllFaqs = require('./FAQS/getAllFaqs')
const getFaqById = require('./FAQS/getFaqById')
const createBooking = require('./Booking/createBooking')
const deleteBooking = require('./Booking/deleteBooking')
const getAllBookings = require('./Booking/getAllBookings')
const getBookingsByPhoneNumber = require('./Booking/getBookingsByPhoneNumber')
const searchPuja = require('./pujas/searchPuja')

module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById,
    createCustomer:createCustomer,
    payment:payment,
    createPuja:createPuja,
    updatePuja:updatePuja,
    deletePuja:deletePuja,
    createFaq:createFaq,
    updateFaq:updateFaq,
    deleteFaq:deleteFaq,
    readAllFaqs: readAllFaqs,
    getFaqById: getFaqById,
    createBooking:createBooking,
    deleteBooking:deleteBooking,
    getAllBookings:getAllBookings,
    getBookingsByPhoneNumber:getBookingsByPhoneNumber,
    searchPuja:searchPuja
}
