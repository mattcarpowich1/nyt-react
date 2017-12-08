import React, { Component } from 'react'
import Query from '../Query/query.js'
import Results from '../Results/results.js'
import API from '../../utils/api.js'
import './search.css'

class Search extends Component {

  state = {
    search: "",
    numRecords: "5",
    results: []
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    API.getArticles(this.state.search, this.state.numRecords)
      .then(articles => {
        this.setState({ results: articles })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSave(headline, date, url) {
    API.saveArticle(headline, date, url)
  }

  render() {
    return (
      <div>
        <Query handleInputChange={this.handleInputChange.bind(this)} 
          handleSubmit={this.handleSubmit.bind(this)} />
        <Results articles={this.state.results}
          handler={this.handleSave} />
      </div>
    )
  }

}

export default Search