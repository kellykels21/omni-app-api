const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  authId: { type: String, required: true, unique: true },
  rsvps: [String],
  friends: [String],
  placeIdOfCurrentLocation: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
