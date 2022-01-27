import React, { Component } from "react";
import NavigationSelection from "./navigationSelection";
import MediaQuery from "react-responsive";
import { Dropdown } from "bootstrap";

class NavigationSelections extends Component {
  state = {
    selectables: [
      { name: "Home", icon: "bi-house", path: "/", time: 200 },
      { name: "AboutMe", icon: "bi-person", path: "/AboutMe", time: 400 },
      { name: "Skills", icon: "bi-gear", path: "/Skills", time: 600 },
      {
        name: "Education",
        icon: "bi-mortarboard",
        path: "/Education",
        time: 800,
      },
      { name: "GIT", icon: "bi-git", path: "/GIT", time: 1000 },
      { name: "Contact", icon: "bi-telephone", path: "/Contact", time: 1200 },
    ],
  };

  navigationSelections = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "inherit",
    width: "inherit",
    maxHeight: "500px",
    maxWidth: "500px",
    gap: "2em",
  };

  navigationSelectionsMobile = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "inherit",
    width: "inherit",
    maxHeight: "500px",
    maxWidth: "500px",
    gap: "10vw",
  };

  render() {
    return (
      <div>
        <MediaQuery minWidth={500}>
          <div
            className="navigationSelections"
            style={this.navigationSelections}
          >
            {this.state.selectables.map((selectable) => (
              <NavigationSelection
                key={selectable.name}
                name={selectable.name}
                icon={selectable.icon}
                path={selectable.path}
                time={selectable.time}
                tooltipPlace={"right"}
              />
            ))}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
        <div
            className="navigationSelections"
            style={this.navigationSelectionsMobile}
          >
            {this.state.selectables.map((selectable) => (
              <NavigationSelection
                key={selectable.name}
                name={selectable.name}
                icon={selectable.icon}
                path={selectable.path}
                time={selectable.time}
                tooltipPlace={"bottom"}
              />
            ))}
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default NavigationSelections;
