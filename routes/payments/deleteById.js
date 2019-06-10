const Payment = require('../../models/payment')

module.exports = async (req, res) => {
    Payment.deleteOne({_id: req.params.id}, (err) => { throw(err) })
    res.send(200, {message: 'Payment Deleted'})
}