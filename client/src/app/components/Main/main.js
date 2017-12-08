import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PageSelect from '../PageSelect/pageSelect.js'
import Search from '../Search/search.js'
import Saved from '../Saved/saved.js'
import './main.css'

class Main extends Component {

  render() {
  return (
    <Router>
      <div className="wrapper">
        <PageSelect />
        <Route exact path="/" component={Search} />
        <Route path="/saved" component={Saved} />
      </div>
    </Router>
  )
  }

}

export default Main