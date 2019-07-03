const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  annualIncome: {
    type: Number,
    default: null 
  },
  monthlyIncome: {
    type: Number,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  authID: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User