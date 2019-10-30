'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')
const createCustomer = require('./transactions/createCustomer')


module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById,
    createCustomer:createCustomer
}
