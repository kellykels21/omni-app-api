const routes = require('express').Router()
const payments = require('./payments')
const user = require('./user')

routes.use('/user', user)
routes.use('/payments', payments)

module.exports = routes