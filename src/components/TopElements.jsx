import React, { Component } from "react";
import LinkIcon from "./LinkIcon";
import { CSSTransition } from "react-transition-group";

class TopElements extends Component {
  state = {};

  upnav = {
    color: "white",
    height: "fit-content",
    minHeight: "4vh",
    width: "fit-content",
    borderRadius: "10px",
    margin: "0",
    padding: "0",

    display: "flex",
    flexDirection: "row",
    gap: "2em",
    flexWrap: "wrap",
    alignSelf: "center",
    justifySelf: "center",
  };

  render() {
    return (
      <div className="top-elements" style={this.upnav}>
        <CSSTransition
          in={true}
          timeout={2100}
          classNames="top-element"
          appear={true}
        >
          <LinkIcon
            url="https://fi.linkedin.com/in/tuomas-hyttinen"
            icon="bi-linkedin"
          />
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={2400}
          classNames="top-element"
          appear={true}
        >
          <LinkIcon
            url="https://www.facebook.com/rumpalitomppa"
            icon="bi-facebook"
          />
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={2700}
          classNames="top-element"
          appear={true}
        >
          <LinkIcon
            url="https://www.instagram.com/rumpalitomppa/"
            icon="bi-instagram"
          />
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={3000}
          classNames="top-element"
          appear={true}
        >
          <LinkIcon url="https://gitlab.jyu.fi/tuooulpe/" icon="bi-git" />
        </CSSTransition>
      </div>
    );
  }
}

export default TopElements;
