const user = require('express').Router()
const create = require('./create')

user.get('/', (req, res) =>{
  res.send(200, {message: 'User Connected.'})
})

user.post('/new', create)
module.exports = user