const user = require("express").Router();
const create = require("./create");
const addCurrentLocation = require("./addCurrentLocation");
const createFriendRequest = require("./createFriendRequest");
const removeCurrentLocation = require("./removeCurrentLocation");
const searchUsers = require("./searchUsers");
const getUserByAuthId = require("./getUserByAuthId");

user.get("/healthcheck", (req, res) => {
  res.send(200, { message: "User Connected." });
});

user.post("/new", create);

user.put("/location/add", addCurrentLocation);
user.put("/location/remove", removeCurrentLocation);

user.put("/friend/request/create", createFriendRequest);

user.get("/search", searchUsers);

user.get("/search/authid", getUserByAuthId);

module.exports = user;
