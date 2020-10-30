const venue = require("express").Router();
const create = require("./create");
const createBatch = require("./create-batch");
const addGuest = require("./addGuest");
const removeGuest = require("./removeGuest");

venue.get("/healthcheck", (req, res) => {
  res.send(200, { message: "Venue Connected." });
});

venue.post("/new", create);

venue.put("/guests/add", addGuest);
venue.put("/guests/remove", removeGuest);

venue.post("/new/batch", createBatch);

module.exports = venue;
