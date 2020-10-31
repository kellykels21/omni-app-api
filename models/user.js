const mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  type: { type: String, enum: ["FRIEND", "RSVP"], required: true },
  status: {
    type: String,
    enum: ["PENDING", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },
});

var userSchema = new mongoose.Schema({
  handle: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  authId: { type: String, required: true, unique: true },
  friends: [String],
  requests: [requestSchema],
  currentLocation: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
