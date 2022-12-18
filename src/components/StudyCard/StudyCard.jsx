import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "./studycard.css";

class StudyCard extends Component {
  state = {};

  render() {
    return (
      <CSSTransition
        in={true}
        timeout={this.props.time}
        classNames="fade"
        appear={true}
      >
        <div className="study-card-bg">
          <div>
            <i className={this.props.icon}></i>
          </div>
          <div>
            <h4>{this.props.school}</h4>
            <p>{this.props.years}</p>
            <p>{this.props.program}</p>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default StudyCard;
