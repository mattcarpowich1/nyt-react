import React from 'react'
import './header.css'

const Header = () => {

  return (
    <nav id="nav" className="navbar">
      <div className="navbar-brand">
        <div className="logo-name-area">
          <img src="./images/nyt-logo.svg" />
          <h1>NYT React Search</h1>
        </div>
      </div>
    </nav>
  )

}

export default Header