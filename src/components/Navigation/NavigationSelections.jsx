import React, { Component } from "react";
import NavigationSelection from "./NavigationSelection";

import "./navigation.css";

/*Container which holds and creates the navigation icons*/
class NavigationSelections extends Component {
  state = {
    selectables: [
      { name: "Home", icon: "bi-house", path: "/", time: 300 },
      { name: "About", icon: "bi-person", path: "/aboutme", time: 600 },
      { name: "Skills", icon: "bi-person-gear", path: "/skills", time: 900 },
      { name: "Education",icon: "bi-mortarboard",path: "/education",time: 1200, },
      { name: "Portfolio", icon: "bi-git", path: "/portfolio", time: 1500 },
      { name: "Contact", icon: "bi-telephone", path: "/contact", time: 1800 },
    ],
  };

  render() {
    return (
      <div>
          <div className="navigation-selections">
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
      </div>
    );
  }
}

export default NavigationSelections;
