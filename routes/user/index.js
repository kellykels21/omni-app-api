const user = require("express").Router();
const create = require("./create");
const updateCurrentLocation = require("./updateCurrentLocation");
const searchUsers = require("./searchUsers");
const getUserByAuthId = require("./getUserByAuthId");

user.get("/healthcheck", (req, res) => {
  res.send(200, { message: "User Connected." });
});

user.post("/new", create);

user.put("/location", updateCurrentLocation);

user.get("/search", searchUsers);

user.get("/search/authid", getUserByAuthId);

module.exports = user;
