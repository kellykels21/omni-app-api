const mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
  from: { type: String, required: true },
  type: { type: String, enum: ["FRIEND", "RSVP"], required: true },
  status: {
    type: String,
    enum: ["PENDING", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },
});

const Request = mongoose.model("Request", requestSchema);

var userSchema = new mongoose.Schema({
  handle: { type: String, required: true, unique: true },
  name: { type: String },
  authId: { type: String, required: true, unique: true },
  friends: [String],
  requests: [Request],
  placeIdOfCurrentLocation: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
