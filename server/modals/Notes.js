const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  title: String,
  description: String,
  tag: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const NotesModel = mongoose.model("Notes", NotesSchema);
module.exports = NotesModel;
