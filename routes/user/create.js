const User = require("../../models/user");

module.exports = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    rsvps: req.body.rsvps,
    friends: req.body.friends,
    placeIdOfCurrentLocation: req.body.placeIdOfCurrentLocation,
    authId: req.body.authId,
  });

  await newUser.save((err, user) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(user);
  });
};
