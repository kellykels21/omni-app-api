const mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
  type: { type: String, enum: ["friend", "rsvp"], required: true },
  requesterAuthId: { type: String },
  receiverAuthId: { type: String },
  placeId: String,
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
