const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//create model
//pluralized version, lowercase of this name === collection name in DB
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
