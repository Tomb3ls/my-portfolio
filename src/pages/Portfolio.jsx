import React, { Component } from "react";
import PortfolioWork from "../components/PortfolioWork";
import { CSSTransition } from "react-transition-group";

class Portfolio extends Component {
  state = {};

  workContents = [
    {
      name: "Portfolio web-page",
      skills: "React, Javascript, Node.js, CSS3, Visual Studio Code, Git",
      picture: require("../images/frontpage.png"),
      alt: "Perheen talous Application",
      description:
        "I wanted to learn more about react so I decided to build my own portfolio with it. I wanted to favor self-written code. I have learned a lot building this site and my next step will be building back-end to it.",
      git: "https://github.com/Tomb3ls/my-portfolio/tree/master",
    },
    {
      name: "Perheen talous",
      skills: "Java, Eclipse, Git",
      picture:
        "https://gitlab.jyu.fi/tuooulpe/ohj2/-/raw/vaihe7/kuvat/paaikkunakSB.JPG",
      alt: "Perheen talous Application",
      description:
        "This is my first Java-program made at my universitys Java-course. Course goal was to learn and practise Java from many perspectives. The program reflects how I'm taught to code clean and tested code.",
      git: "https://gitlab.jyu.fi/tuooulpe/ohj2/-/tree/vaihe7",
    },
    {
      name: "Jypeli - game",
      skills: "C#, Visual Studio, Git",
      picture:
        "https://gitlab.jyu.fi/tuooulpe/ohj2/-/raw/vaihe7/kuvat/paaikkunakSB.JPG",
      alt: "Marsin puolustus Application",
      description:
        "This was my first school project nearly three years ago. I learned a lot back then at the course about clean coding and C#.",
      git: "https://gitlab.jyu.fi/tuooulpe/ohj1ht",
    },
    {
      name: "Heuristic usability evaluation (in finnish)",
      skills: "Usability evaluation",
      picture: require("../images/exam.png"),
      alt: "School exam answer",
      description:
        "This was actually course exam assigment during my studies regarding user usability. During covid they desided to give us one week to do heuristric evaluation of a chosen webpage as a exam answer. The page was supposed to be a clear, bad example of usability. This was my work and I got full points out of it. Hopefully this will give you some perpective about my writing and analytic skills. I sent this to the service provider of the analyzed web-page and got really good feedback of it.",
      git: "https://drive.google.com/file/d/12hvGVIKQ8gIsgMFc7nd3OMlsa9bSPZYz/view?usp=sharing",
    },
  ];

  render() {
    return (
      <div className="content-area-portfolio">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="portfolio-content">
            <div className="portfolio-text">
              <h1 className="heading highlighted">Portfolio</h1>
              <p>
                Here I present some of my own projects and school works with
                detailed descriptions. Some of the projects (including this
                web-page) are more or less under constant developement.
                <br></br>
                <br></br>
                Please, feel free to comment my work by sending me a message in
                linkedin I'm always happy to hear your opinions and especially to
                learn from them.
                <br></br>
                <br></br>
                Hopefully you like the things I spend my free time with!
              </p>
            </div>
            <div className="portfolio-gallery">
              {this.workContents.map((object) => (
                <PortfolioWork
                  name={object.name}
                  skills={object.skills}
                  picture={object.picture}
                  alt={object.alt}
                  description={object.description}
                  git={object.git}
                />
              ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Portfolio;
