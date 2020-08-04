const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  const newVenue = new Venue({
    placeId: req.body.placeId,
  });

  await newVenue.save((err, venue) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(venue);
  });
};
