const User = require("../../models/user");

//TODO: Add Validations
module.exports = async (req, res) => {
  const query = { authId: req.query.authId };
  User.findOneAndUpdate(
    query,
    { currentLocation: req.query.placeId },
    (result) => {
      res.status(204).send(result);
    }
  );
};
