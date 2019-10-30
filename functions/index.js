'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')


module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById
}
