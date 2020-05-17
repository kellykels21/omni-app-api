const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  const newVenue = new Venue({
    name: req.body.name,
    placeId: req.body.placeId,
    rsvps: req.body.rsvps,
    placeIdOfCurrentLocation: req.body.placeIdOfCurrentLocation,
    status: req.body.status,
    location: req.body.location,
    imageUrl: req.body.imageUrl,
  });

  await newVenue.save((err, venue) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(venue);
  });
};
