const Venue = require("../../models/venue");
const venue = require(".");

module.exports = async (req, res) => {
  const venues = JSON.parse(req.body.venues);

  for (let i = 0; i < venues.length; i++) {
    const venue = venues[i];

    const newVenue = new Venue({
      placeId: venue.place_id,
    });

    await newVenue.save((err, venue) => {
      if (err) {
        if (err.code != 11000) console.log(err);
      }
    });
  }

  res.status(201).send("Successfully saved venues batch!");
};
