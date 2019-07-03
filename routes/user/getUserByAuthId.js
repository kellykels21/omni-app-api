const User = require('../../models/user')

module.exports = async (req, res) => {
  const authID = req.params.authID
  const user = await User.find({ authID })
  console.log(user)
  
  if (user.length != 0) {
    res.send(200, { user })
  } else {
    res.send(404, 'Item not Found')
  }
}