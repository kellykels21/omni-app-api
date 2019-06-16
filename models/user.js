const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  annualIncome: {
    type: Number,
    required: true
  },
  monthlyIncome: {
    type: Number,
    default: null
  },
  state: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User