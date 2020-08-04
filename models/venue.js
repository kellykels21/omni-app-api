const mongoose = require("mongoose");

var venueSchema = new mongoose.Schema({
  placeId: { type: String, required: true, unique: true },
  attendees: [String],
  currentHotnessRating: Number,
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
