const venue = require("express").Router();
const create = require("./create");
const createBatch = require("./create-batch");

// TODO: update venues routes to create new venues in db

venue.get("/healthcheck", (req, res) => {
  res.send(200, { message: "Venue Connected." });
});

venue.post("/new", create);

venue.post("/new/batch", createBatch);

module.exports = venue;
