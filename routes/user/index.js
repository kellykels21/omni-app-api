const user = require('express').Router()
const create = require('./create')
const getUserByAuthID = require('./getUserByAuthId')

user.get('/', (req, res) =>{
  res.send(200, {message: 'User Connected.'})
})
user.post('/new', create)
user.get('/:authID', getUserByAuthID)

module.exports = user