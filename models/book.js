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
<<<<<<< HEAD
=======

const Book = mongoose.model("Book", bookSchema);

//export the model
module.exports = Book;
>>>>>>> a27e4bfa5e41e17ac21fcaa02d56ebef730db955
