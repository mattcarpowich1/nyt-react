const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  headline: {
    type: String,
    trim: true,
    unique: true,
    required: "Article title is required."
  },

  date: {
    type: String,
    trim: true,
    required: "Article date is required."
  },

  url: {
    type: String,
    trim: true,
    required: "Article link is required."
  }

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;