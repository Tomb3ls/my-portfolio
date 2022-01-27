import React, { Component } from "react";

class SkillCard extends Component {
  state = {};

  skillCard = {
    backgroundColor: "#1F4B65",
    borderRadius: "10px",
    width: "auto",
    maxWidth: "20em",
    height: "auto",
    border: "0.5em solid #1F4B65",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingTop: "0.5em",

    display: "inline-flex",
  };

  SCPArea = {
    fontSize: "1.25em",
  };
S
  render() {
    return (
      <div
        className="skillCard glow-element"
        style={this.skillCard}
      >
        <div className="SCPArea" style={this.SCPArea}>
          <p>{this.props.skill}</p>
        </div>
      </div>
    );
  }
}

export default SkillCard;
