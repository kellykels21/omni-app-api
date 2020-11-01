const User = require("../../models/user");

module.exports = async (req, res) => {
  const query = { authId: req.body.authId };
  User.findOneAndUpdate(query, { currentLocation: null }, (result) => {
    res.status(204).send("User Location Removed Successfully.");
  });
};
