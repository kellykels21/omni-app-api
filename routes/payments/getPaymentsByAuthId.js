const Payment = require('../../models/payment')

module.exports = async (req, res) => {
    const authID = req.params.authID
    const payments = await Payment.find({ authID })
    res.send(200, { payments })
}