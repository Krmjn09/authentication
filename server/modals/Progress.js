// models/Progress.js
const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  weather: String,
  selectedOption: String,
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
