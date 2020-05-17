const venue = require("express").Router();
const create = require("./create");
const getVenuesByRadius = require("./getVenuesByRadius");

venue.get("/healthcheck", (req, res) => {
  res.send(200, { message: "Venue Connected." });
});

venue.post("/new", create);

venue.get("/local", getVenuesByRadius);

module.exports = venue;
