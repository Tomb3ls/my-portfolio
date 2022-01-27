import React, { Component } from "react";
import me from "../images/ME.jpg";
import "../index.css";
import { CSSTransition } from "react-transition-group";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="contentAreaHome">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="homeAreaContent">
            <img className="me" src={me} alt="Me" />
            <div className="homeTextArea">
              <span className="hi">Hi! I'm</span>
              <h2 className="name">TUOMAS HYTTINEN</h2>
              <div className="welcome">
                <span> Welcome to my portfolio!</span>
              </div>
              <p>
                I'm a tech oriented team player passionate about developing{" "}
                <br></br>and making user friendly sollutions. <br></br>
                New technical applications and solutions inspired me and{" "}
                <br></br>i'm constantly searching for new ideas. <br></br>
              </p>
              <p>Hope you like my page!!</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Home;
