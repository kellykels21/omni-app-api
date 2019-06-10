const Payment = require('../../models/payment')

module.exports = async (req, res) => {
    const payment = new Payment({
        userID: req.body.userID,
        vendor: req.body.vendor,
        description: req.body.description,
        amount: req.body.amount,
        paymentDate: req.body.paymentDate,
        dueDate: req.body.dueDate,
        type: req.body.type
    })

    await payment.save((err, payment) => {
        if (err) return console.error(err)
        res.send(201, {message: 'Payment created!', payment})
    })
    
}