const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  Venue.findOne({ placeId: req.query.placeId }, function (err, venue) {
    console.log("Found Venue: " + venue);
    res.status(200).send(venue);
  });
};
