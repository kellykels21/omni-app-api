const User = require("../../models/user");

module.exports = async (req, res) => {
  const newUser = new User({
    handle: req.body.handle,
    authId: req.body.authId,
  });

  await newUser.save((err, user) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(user);
  });
};
