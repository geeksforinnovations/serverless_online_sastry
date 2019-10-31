'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')
const createCustomer = require('./transactions/createCustomer')
const payment = require('./transactions/payment')
const createPuja = require('./pujas/createPuja')

module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById,
    createCustomer:createCustomer,
    payment:payment,
    createPuja:createPuja
}
