import axios from "axios"

export default {
  getArticles: function(query, numArticles) {
    return new Promise((resolve, reject) => {
      const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
      const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + query

      axios.get(queryURLBase)
        .then(response => {
          const results = response.data.response.docs
          let max
          const articles = []

          results.length < numArticles ? max = results.length : max = parseInt(numArticles)

          for (let i = 0; i < max; i++) {
            articles.push(results[i])
          }

          resolve(articles)

        })
        .catch(err => {
          reject("Error: " + err)
        })
    })
  },

  findAll: function(req, res) {
    return new Promise((resolve, reject) => {
      axios.get('api/saved')
        .then(articles => {
          resolve(articles)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  saveArticle: function(headline, date, url) {
    axios.post('/api/saved', {
      headline: headline,
      date: date, 
      url: url
    })
    .then(article => {
      console.log("Success!")
    })
    .catch(err => {
      console.log(err)
    })
  },

  deleteArticle: function(_id) {
    return new Promise((resolve, reject) => {
      axios.delete('api/saved' + _id)
        .then(article => {
          resolve(article)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}