const User = require("../../models/user");

module.exports = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    rsvps: req.body.rsvps,
    friends: req.body.friends,
    placeIdOfCurrentLocation: req.body.placeIdOfCurrentLocation,
  });

  await newUser.save((err, user) => {
    if (err) throw err;
    res.status(201).send(user);
  });
};
