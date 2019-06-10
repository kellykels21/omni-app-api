const payments = require('express').Router()
const create = require('./create')
const getPaymentsByUserID = require('./getPaymentsByUserId')
const deleteById = require('./deleteById')

payments.get('/', (req, res) =>{
    res.send(200, {message: 'Payments Connected.'})
})

payments.delete('/remove/:id', deleteById)
payments.get('/:userID', getPaymentsByUserID)
payments.post('/new', create)

module.exports = payments