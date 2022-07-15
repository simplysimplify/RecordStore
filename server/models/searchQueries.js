const { Schema, model } = require("mongoose");

const searchSchema = new Schema({
  searchTerm: {
    type: String,
    required: true,
  },
  searchType: {
    type: String,
    required: true,
    enum: ["Artist", "Album", "Song"],
  },
  //  toJSON: {
  //   virtuals: true,
  //  },
});

const Search = model("Search", searchSchema);

module.exports = Search;
