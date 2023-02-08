const { Schema, model } = require("mongoose");

const ArticleShema = Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  date: {
    type: Date,
    default: Date.now 
  },
  image: {
    type: String,
    default: "default.png",
  }
});

module.exports = model("Article", ArticleShema, "articles");