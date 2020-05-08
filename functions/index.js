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
const getLanguages = require('./Language/getLanguages')
const generateOTP = require('./otp/create')
const verifyOtp = require('./otp/verify')
const createAppSettings = require('./appSettings/createAppSettings')
const cancelBooking = require('./Booking/cancelBooking')
const updateBooking = require('./Booking/updateBooking')
const getAllAppSettings = require('./appSettings/getAllAppSettings')
const updateAppSettings = require('./appSettings/updateAppSettings')
const deleteAppSettings = require('./appSettings/deleteAppSettings')
const getAppSettingsValueByKey = require('./appSettings/getAppSettingsValueByKey')
const send = require('./email/send')
const createPujari = require('./pujaris/createPujari')
const getAllPujaris = require('./pujaris/getAllPujaris')
const updatePujariStatus = require('./pujaris/updatePujariStatus')





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
    searchPuja:searchPuja,
    getLanguages:getLanguages,
    generateOTP: generateOTP,
    verifyOtp:verifyOtp,
    cancelBooking:cancelBooking,
    reschedule:updateBooking,
    createAppSettings:createAppSettings,
    getAllAppSettings:getAllAppSettings,
    updateAppSettings:updateAppSettings,
    deleteAppSettings:deleteAppSettings,
    getAppSettingsValueByKey:getAppSettingsValueByKey,
    sendEmail:send,
    getAllPujaris:getAllPujaris,
    createPujari:createPujari,
    updatePujariStatus:updatePujariStatus
}
