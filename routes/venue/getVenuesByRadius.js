const Venue = require("../../models/venue");

module.exports = async (req, res) => {
  try {
    const results = await Venue.find({
      location: {
        $geoWithin: {
          $centerSphere: [[req.query.long, req.query.lat], 20 / 3963.2],
        },
      },
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
