const venue = require("express").Router();
const create = require("./create");

venue.get("/healthcheck", (req, res) => {
  res.send(200, { message: "Venue Connected." });
});

venue.post("/new", create);

module.exports = venue;
