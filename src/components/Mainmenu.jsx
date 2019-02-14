import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../styles/MenuBar.css'

class MenuBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }

    this.toggleOpen = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
    this.updateWindowDimensions = () => {
      if (window.innerWidth < 700) {
        this.setState({ open: false })
      } else {
        this.setState({ open: true })
      }
    }
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  render() {
    return (
      <div className="menubarContainer">
        {this.state.open ? (
          <div className="toplist">
            <a href="https://andrewmclaughl.in" className="menuButton">
              Home
            </a>
            <a href="https://andrewmclaughl.in/about/" className="menuButton">
              About
            </a>
            <a href="https://andrewmclaughl.in/demos/" className="menuButton">
              Demos
            </a>
            <Link to={'/'} className="menuButton selected">Blog</Link>{' '}
          </div>
        ) : null}
        <div className="menuArrowContainer">
          <div onClick={this.toggleOpen} className="menuButton openarrow">
            Menu
            <span
              className={
                this.state.open
                  ? 'menuArrow rotated openarrow'
                  : ' counterrotated menuArrow openarrow'
              }
            >
              ▼
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBar
