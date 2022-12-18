import React, { Component } from "react";
import NavigationSelections from "./NavigationSelections";
import logo from "../../images/LOGO.png";
import "./navigation.css";

import "bootstrap/dist/css/bootstrap.css";

/*Navigation bar*/
class NavigationBar extends Component {
  state = {};

  render() {
    return (
      <div className="nav-bar-area">
          <div className="nav-bar">
              <img className="nav-logo" src={logo} alt="logo" />
              <NavigationSelections />
          </div>
      </div>
    );
  }
}

export default NavigationBar;
