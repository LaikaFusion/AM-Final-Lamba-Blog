import React, { Component } from 'react'
import '../styles/MenuBar.css'

const Mainmenu = props => {
  return (
    <div className="menubarContainer">
      <div className="menuButton">Home</div>
      <div className="menuButton">About</div>
      <div className="menuButton">Demos</div>
      <div className="menuButton selected">Blog</div>
    </div>
  )
}

export default Mainmenu
