const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

var venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  placeId: { type: String, required: true, unique: true },
  rsvps: [String],
  status: [Number],
  location: {
    type: pointSchema,
    required: true,
  },
  imageUrl: String,
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
