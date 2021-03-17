const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = {};

const bookSchema = new Schema({
  authors: Array,
  description: String,
  image: String,
  link: String,
  title: String,
});

const Book = mongoose.model("Book", bookSchema);

//export the model
module.exports = Book;
