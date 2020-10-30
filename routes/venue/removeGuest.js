const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  const query = { placeId: req.body.placeId };
  Venue.findOneAndUpdate(
    query,
    { $pullAll: { guests: [req.body.authId] } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(204).send(result);
      }
    }
  );
};
