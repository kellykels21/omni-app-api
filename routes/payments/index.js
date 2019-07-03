const payments = require('express').Router()
const create = require('./create')
const getPaymentsByAuthID = require('./getPaymentsByAuthId')
const deleteById = require('./deleteById')

payments.get('/', (req, res) =>{
    res.send(200, {message: 'Payments Connected.'})
})

payments.delete('/remove/:id', deleteById)
payments.get('/:authID', getPaymentsByAuthID)
payments.post('/new', create)

module.exports = payments