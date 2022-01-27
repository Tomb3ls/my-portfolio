import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class StudyCard extends Component {
  state = {};

  scBackground = {
    backgroundColor: "rgba(131, 146, 155)",
    width: "25em",
    height: "10em",
    display: "flex",
    alignItems: "center",
    justifyItems: "space-around",
    border: "1em solid rgba(131, 146, 155)",
    borderRadius: "10px",
  };

  scIconStyle = {
    color: "white",
    fontSize: "5em",
    display: "flex",
    alignItems: "center",
    justifyItems: "space-around",
    backgroundColor: "#1F4B65",
    borderRadius: "50%",
    border: "0.3em solid #1F4B65",
  };

  scTextArea = {
    background: "#5D8399",
    border: "0.5em solid #5D8399",
    marginLeft: "1em",
    height: "8em",
    width: "23em",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    borderRadius: "10px",
  };

  render() {
    return (
      <CSSTransition
        in={true}
        timeout={this.props.time}
        classNames="fade"
        appear={true}
      >
        <div className="scBackground" style={this.scBackground}>
          <i className={this.props.icon} style={this.scIconStyle}></i>
          <div style={this.scTextArea}>
            <h4
              style={{
                color: "black",
                margin: "0em",
                fontSize: "1em",
                fontWeight: "bold",
              }}
            >
              {this.props.school}
            </h4>
            <p style={{ color: "black", margin: "0em", fontSize: "0.8em" }}>
              {this.props.years}
            </p>
            <p style={{ color: "black", margin: "0em", fontSize: "0.92em" }}>
              {this.props.program}
            </p>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default StudyCard;
