// creating a Model which is fancy constructor compiled from Schema definitions. This will be used when making the http requests
const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text."],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Idea", IdeaSchema);
