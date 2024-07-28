const mongoose = require("mongoose");

// Define the region schema
const regionSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  ratings: Number,
  lat: { type: Number, required: true }, // Add latitude
  lng: { type: Number, required: true }, // Add longitude
});

// Define the place schema
const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  regions: [regionSchema],
  image: String,
  ratings: Number,
  lat: { type: Number, required: true }, // Add latitude
  lng: { type: Number, required: true }, // Add longitude
});

// Create the model
const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
