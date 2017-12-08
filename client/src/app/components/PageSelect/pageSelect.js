import React from 'react'
import { NavLink } from 'react-router-dom'
import './pageSelect.css'

const PageSelect = props => {

  return (
    <div className="tabs">
      <ul>
        <li>
          <NavLink activeClassName="active" 
            exact to="/">Search</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"
            to="/saved">Saved Articles</NavLink>
        </li>
      </ul>
    </div>
  )

}

export default PageSelect