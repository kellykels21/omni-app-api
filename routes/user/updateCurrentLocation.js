const User = require("../../models/user");

module.exports = async (req, res) => {
  const query = { authId: req.body.authId };
  User.findOneAndUpdate(
    query,
    { placeIdOfCurrentLocation: req.body.placeId },
    (result) => {
      res.status(204).send("User Location Updated Successfully.");
    }
  );
};
