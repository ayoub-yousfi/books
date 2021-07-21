const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
    unique: true,
  },
  genre: String,
});

const bookdb = mongoose.model("bookdb", schema);
module.exports = bookdb;
