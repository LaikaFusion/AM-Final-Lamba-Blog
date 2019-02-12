import React, { Component } from "react";
import "../styles/MenuBar.css"

class Mainmenu extends Component {
  render() {
    return (
      <div className="positonDiv">
      <div className="fullContainer">
        <div className="leftLine" />
        <div className="menuContainer">
          {/* <div className="title">{process.env.REACT_APP_REALNAME}</div> */}
            <div className="about menuItem">About</div>
            <div className="demos menuItem">Demos</div>
            <div className="blog menuItem">Blog</div>
        </div>
        <div className="rightLine" />
      </div>
      </div>
    );
  }
}

export default Mainmenu;
