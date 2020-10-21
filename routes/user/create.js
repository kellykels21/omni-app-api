const User = require("../../models/user");

module.exports = async (req, res) => {
  const newUser = new User({
    handle: req.body.handle,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    authId: req.body.authId,
  });

  await newUser.save((err, user) => {
    if (err.code == 11000) {
      res.status(409).send();
    }
    console.log("hit");
    res.status(201).send(user);

    if (err) {
      console.log(err);
    }
  });
};
