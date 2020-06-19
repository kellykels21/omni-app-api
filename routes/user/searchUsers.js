const User = require("../../models/user");

module.exports = async (req, res) => {
  var searchKey = new RegExp(req.query.name, "i");

  User.find({ name: searchKey }, null, { limit: 20 }, (err, users) => {
    if (err) throw err;

    console.log(users);
    res.status(200).send(users);
  });
};
