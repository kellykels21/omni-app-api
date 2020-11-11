const User = require("../../models/user");

module.exports = async (req, res) => {
  var searchKey = new RegExp(req.query.handle, "i");
  console.log(req.query.authId);
  User.find(
    { handle: searchKey, authId: { $ne: req.query.authId } },
    null,
    { limit: 20 },
    (err, users) => {
      if (err) throw err;

      console.log(users);
      res.status(200).send(users);
    }
  );
};
