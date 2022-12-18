import React, { Component } from "react";
import me from "../images/ME.jpg";
import lightbulb from "../images/lightbulb.png";
import connections from "../images/connections.png";
import job from"../images/job.png";
import "../styles.css";
import { CSSTransition } from "react-transition-group";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content-area-home">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="home-content">
            <img className="me-img" src={me} alt="Me" />
            <div className="home-text-area">
              <span className="hi-heading">Hi there! I'm</span>
              <h1 className="name-heading">TUOMAS HYTTINEN</h1>
              <br></br>
              <p>
                I'm a tech oriented team player passionate about technology and coding.{" "}
                <br></br>Making better user friendly sollutions is my future mission and I determinedly drive towards it.
                <br></br>Constantly searching for new: <br></br>
              </p>
              <div className="text-picture-area">
                <img className="text-pictures" src={lightbulb} alt="lightbulb" />
                <img className="text-pictures" src={connections} alt="people connecting" />
                <img className="text-pictures" src={job} alt="suitcase representing job seeking" />
              </div>
              <p>Hoping you like my page!</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Home;
