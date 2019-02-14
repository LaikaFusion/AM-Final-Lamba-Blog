import React, { Component } from 'react'
import '../styles/MenuBar.css'

const Mainmenu = props => {
  return (
    <div className="menubarContainer">
      <a href="https://andrewmclaughl.in" className="menuButton">Home</a>
      <a href="https://andrewmclaughl.in/about/" className="menuButton">About</a>
      <a href="https://andrewmclaughl.in/demos/" className="menuButton">Demos</a>
      <a className="menuButton selected">Blog</a>
    </div>
  )
}

export default Mainmenu
