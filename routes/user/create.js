const User = require('../../models/user')

module.exports = async (req, res) => {
  const newUser = new User({
    annualIncome: req.body.annualIncome,
    monthlyIncome: req.body.monthlyIncome,
    // monthlyIncome: (req.body.monthlyIncome == null ? await calculateMonthlyIncome(req.body.annualIncome, req.body.state) : req.body.monthlyIncome),
    state: req.body.state,
    authID: req.body.authID
  })

  await newUser.save((err, user) => {
    if (err) throw err
    res.status(201).send(user)
  })
}

const calculateMonthlyIncome = async (annualIncome, state) => {
  return {}
}