import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

/*Done with the inline CSS for purpose of studying the methods*/
class StudyCard extends Component {
  state = {};

  scBackground = {
    backgroundColor: "var(--color-primary-3)",
    maxWidth: "25em",
    maxHeight: "10em",
    display: "flex",
    alignItems: "center",
    justifyItems: "space-around",
    border: "1em solid var(--color-primary-3)",
    borderRadius: "10px",
    boxShadow: "1px 1px 2px var(--color-primary-1)"
  };

  scIconStyle = {
    color: "var(--color-primary-1)",
    fontSize: "5em",
    display: "flex",
    alignItems: "center",
    justifyItems: "space-around",
    backgroundColor: "var(--color-primary-0)",
    borderRadius: "50%",
    border: "0.3em solid var(--color-primary-0)",
  };

  scTextArea = {
    background: "var(--color-primary-0)",
    border: "0.5em solid var(--color-primary-0)",
    marginLeft: "1em",
    height: "8em",
    width: "23em",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    borderRadius: "10px",
  };

  text = {
    fontSize: "0.8em",
    color: "var(--color-primary-1)",
  };

  header = {
    color: "var(--color-primary-1)",
    margin: "0em",
    fontSize: "1em",
    fontWeight: "bold",
  };

  render() {
    return (
      <CSSTransition
        in={true}
        timeout={this.props.time}
        classNames="fade"
        appear={true}
      >
        <div style={this.scBackground}>
          <i className={this.props.icon} style={this.scIconStyle}></i>
          <div style={this.scTextArea}>
            <h4 style={this.header}>
              {this.props.school}
            </h4>
            <p style={this.text}>
              {this.props.years}
            </p>
            <p style={this.text}>
              {this.props.program}
            </p>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default StudyCard;
