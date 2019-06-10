const routes = require('express').Router()
const payments = require('./payments')

routes.use('/payments', payments)

module.exports = routes