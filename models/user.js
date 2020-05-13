const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rsvps: [String],
  friends: [String],
  placeIdOfCurrentLocation: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
