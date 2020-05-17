const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  const newVenue = new Venue({
    name: req.body.name,
    placeId: req.body.placeId,
    rsvps: req.body.rsvps,
    status: req.body.status,
    location: req.body.location,
    photoReference: req.body.photoReference,
  });

  await newVenue.save((err, venue) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(venue);
  });
};
