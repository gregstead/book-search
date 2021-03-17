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
