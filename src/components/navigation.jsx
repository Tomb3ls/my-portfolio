import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationSelections from "./navigationSelections";
import logo from "../images/LOGO.png";
import MediaQuery from "react-responsive";

class NavigationBar extends Component {
  state = {};

  logo = {
    maxWidth: "10vw",
    maxHeight: "10vh",
  };

  area1 = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  area2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  area3 = {};

  navigationBar = {
    maxWidth: "100px",
    minWidth: "75px",
    height: "100vh",
    display: "grid",
    gridAutoRows: "10vh 80vh 10vh",
    backgroundColor: this.props.color,
  };

  area1Mobile = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  area2Mobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  area3Mobile = {};

  navigationBarMobile = {
    maxHeight: "75px",
    minHeight: "60px",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "10vw 80vw 10vw",
    backgroundColor: this.props.color,
  };

  render() {
    return (
      <div>
        <MediaQuery minWidth={500}>
          <nav className="navigationBar" style={this.navigationBar}>
            <div className="area1" style={this.area1}>
              <img style={this.logo} src={logo} alt="LOGO" />
            </div>
            <div className="area2" style={this.area2}>
              <NavigationSelections />
            </div>
            <div className="area3" style={this.area3}></div>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <nav className="navigationBar" style={this.navigationBarMobile}>
            <div className="area1" style={this.area1Mobile}>
            </div>
            <div className="area2" style={this.area2Mobile}>
              <NavigationSelections />
            </div>
            <div className="area3" style={this.area3Mobile}></div>
          </nav>
        </MediaQuery>
      </div>
    );
  }
}

export default NavigationBar;
