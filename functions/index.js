'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')
const createCustomer = require('./transactions/createCustomer')
const payment = require('./transactions/payment')
const createPuja = require('./pujas/createPuja')
const updatePuja = require('./pujas/updatePuja')
const deletePuja = require('./pujas/deletePuja')

module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById,
    createCustomer:createCustomer,
    payment:payment,
    createPuja:createPuja,
    updatePuja:updatePuja,
    deletePuja:deletePuja
}
