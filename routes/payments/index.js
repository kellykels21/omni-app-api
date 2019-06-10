const payments = require('express').Router()
const create = require('./create')

payments.get('/', (req, res) =>{
    res.send(200, {message: 'Payments Connected.'})
})

payments.post('/new', create)

module.exports = payments