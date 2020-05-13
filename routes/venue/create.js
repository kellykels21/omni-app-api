const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  const newVenue = new Venue({
    name: req.body.name,
    placeId: req.body.placeId,
    rsvps: req.body.rsvps,
    placeIdOfCurrentLocation: req.body.placeIdOfCurrentLocation,
    status: req.body.status,
    location: req.body.location,
  });

  await newVenue.save((err, venue) => {
    if (err) throw err;
    res.status(201).send(venue);
  });
};
