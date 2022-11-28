import React, { Component } from "react";
import exam from "../images/exam.png";

class GIT extends Component {
  state = {};
  render() {
    return (
      <div className="contentAreaPortfolio defaultBackground">
        <div>
          <h1 className="heading">This is my portfolio</h1>
          <p className="portfolioText">
            Here I present some of my own projects and school works with
            descriptions. Most of the projects are more or less under constant
            developement.
            <strong>
              {" "}
              This web-page is fully coded by me using React, JSX and Node.js.
              It itself is part of my portfolio and will demonstrate my
              designing skills as well as skills with used languages and
              libraries.{" "}
            </strong>
            Please, feel free to comment my work by sending me a message under
            the 'Contacts' tab. I'm always happy to hear your opinions and
            especially to learn from them.
          </p>
        </div>
        <div className="portfolioWork">
          <h3 className="projectHeading">PerheenTalous - Java app</h3>
          <img
            className="defaultPic"
            src="https://gitlab.jyu.fi/tuooulpe/ohj2/-/raw/vaihe7/kuvat/paaikkunakSB.JPG"
            alt="PerheenTalous"
          ></img>
          <div className="portfolioProjectDetails">
            <p>
              {" "}
              <strong>PROJECT DETAILS:</strong>
              <br></br>
              <br></br>
              This is my first Java-program made at my universitys Java-course.
              It's made in Finnish, but I'm currently working on english version
              which will also be upgraded version in many ways. Because the
              application is done at the school course, it isn't very
              "practically" coded, 'cause the goal was to learn and practise
              Java from many perspectives. The program reflects how I'm taught
              to code clean code.
              <br></br>
              <br></br>
            </p>
            <p>
              Git repository can be found here:{" "}
              <a href="https://gitlab.jyu.fi/tuooulpe/ohj2/-/tree/vaihe7">
                <i className="bi-git"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="portfolioWork">
          <h3 className="projectHeading">
            Heuristic usability evaluation (in finnish){" "}
          </h3>
          <img
            className="defaultPic"
            src={exam}
            alt="picture about exam answer"
          ></img>
          <div className="portfolioProjectDetails">
            <strong>PROJECT DETAILS:</strong>
            <br></br>
            <br></br>
            <p>
              {" "}
              This was actually course exam assigment during my studies
              regarding user usability. During covid they desided to give us one
              week to do heuristric evaluation of a chosen webpage as a exam
              answer. The page was supposed to be a clear, bad example of
              usability. This was my work and I got full points out of it.
              Hopefully this will give you some perpective about my writing and
              analytic skills.
            </p>
            <p>
              The full work can be found
              <strong>
                <a href="https://drive.google.com/file/d/12hvGVIKQ8gIsgMFc7nd3OMlsa9bSPZYz/view?usp=sharing">
                  {" "}
                  HERE!
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GIT;
