const user = require('express').Router()

user.get('/', (req, res) =>{
  res.send(200, {message: 'User Connected.'})
})

module.exports = user