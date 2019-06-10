const payments = require('express').Router()
const create = require('./create')
const getPaymentsByUserID = require('./getPaymentsByUserId')

payments.get('/', (req, res) =>{
    res.send(200, {message: 'Payments Connected.'})
})

payments.get('/:userID', getPaymentsByUserID)
payments.post('/new', create)

module.exports = payments