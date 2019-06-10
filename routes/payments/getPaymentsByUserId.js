const Payment = require('../../models/payment')

module.exports = async (req, res) => {
    const userID = req.params.userID
    const payments = await Payment.find({ userID })
    res.send(200, { payments })
}