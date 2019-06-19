const User = require('../../models/user')

module.exports = async (req, res) => {
  const _user = new User.findById(req.body.UserID, (err, user) => {
    if (err) throw err

    console.log(user)
  })
}

const calculateMonthlyIncome = async (annualIncome, state) => {
  return {}
}