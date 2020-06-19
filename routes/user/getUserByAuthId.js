const User = require("../../models/user");

module.exports = async (req, res) => {
  User.findOne({ authId: req.query.authId }, function (err, user) {
    console.log("Found User: " + user);
    res.status(200).send(user);
  });
};
