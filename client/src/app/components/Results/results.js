import React from 'react'
import './results.css'

const Results = props => {

  return (
    <div className="results-section">
      <h2>Results</h2>
      <div className="results">
        {
          props.articles.map(article => {
            let headline = article.headline.main
            let snippet = article.snippet
            let url = article.web_url
            let date = article.pub_date
            return (
              <div className="card result" key={article._id}>
                <header className="card-header">
                  <h3 className="card-header-title">
                    {headline}
                  </h3>
                  <button className="button card-header-icon is-dark save"
                    onClick={() => {
                      props.handler(headline, date, url)
                    } }>Save</button>
                </header>
                <div className="card-content">
                  {snippet}
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href={url}>Read Article</a>
                  </p>
                </footer>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}


export default Results