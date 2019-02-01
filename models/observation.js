const mongoose = require("mongoose");

const observationSchema = new mongoose.Schema({
  species: String,
  rarity: String,
  notes: String,
  time: Date,
  latitude: String,
  longitude: String
});

observationSchema.statics.format = observation => {
  return {
    id: observation.id,
    species: observation.species,
    rarity: observation.rarity,
    notes: observation.notes,
    time: observation.time,
    latitude: observation.latitude,
    longitude: observation.longitude
  };
};

const Observation = mongoose.model("Observation", observationSchema);

module.exports = Observation;
