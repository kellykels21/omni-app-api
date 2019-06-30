const mongoose = require('mongoose')

var paymentSchema = new mongoose.Schema({
    authID: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null,
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        default: null
    },
    type: {
        type: String,
        required: true
    }
})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment