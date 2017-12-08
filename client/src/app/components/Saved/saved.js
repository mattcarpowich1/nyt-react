import React, { Component } from 'react'
import API from '../../utils/api.js'
import './saved.css'

class Saved extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    API.findAll()
      .then(response => {
        this.setState({ articles: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete(_id) {
    API.deleteArticle(_id)
      .then(article => {
        API.findAll()
          .then(response => {
            this.setState({ articles: response.data })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="saved">
        <h2>Saved Articles</h2>
        {
          this.state.articles.map(article => {
            return (
              <div className="card result" key={article._id}>
                <header className="card-header">
                  <h3 className="card-header-title">
                    { article.headline }
                  </h3>
                  <button className="button card-header-icon is-danger save"
                    onClick={ ()=> {
                      this.handleDelete(article._id)
                    }}>Delete</button>
                </header>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href={article.url}>Read Article</a>
                  </p>
                </footer>
              </div>
            )
          })
        }
      </div>
    )
  }
	
}

export default Saved