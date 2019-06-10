const Payment = require('../../models/payment')

module.exports = async (req, res) => {
    const userID = req.params.userID
    const payments = await Payment.find({ userID })
    console.log(payments)
    res.send(200, { payments })
}