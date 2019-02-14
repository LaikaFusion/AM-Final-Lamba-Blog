import React, { Component } from 'react'
import '../styles/MenuBar.css'

const Mainmenu = props => {
  return (
    <div className="menubarContainer">
      <div className="menuButton">Home</div>
      <div className="menuButton">About</div>
      <div className="menuButton">Demos</div>
      <a className="menuButton selected">Blog</a>
    </div>
  )
}

export default Mainmenu
