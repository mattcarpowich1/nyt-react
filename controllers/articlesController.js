const Article = require('../models/article.js');

module.exports = {

  findAll: (req, res) => {
    Article
      .find({})
      .sort({ date: -1 })
      .then(articles => {
        res.json(articles);
      })
      .catch(err => {
        console.log(err);
      });
  },

  create: (req, res) => {
    Article
      .create(req.body)
      .then(article => {
        res.json(article);
      })
      .catch(err => {
        console.log(err);
      });
  },

  remove: (_id, req, res) => {
    Article
      .remove({ _id })
      .then(article => {
        res.json(article)
      })
      .catch(err => {
        console.log(err)
      })
  }

}