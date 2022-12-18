import React, { Component } from "react";
import MessageMe from "../components/MessageMe";
import me from "../images/ME.jpg";
import LinkIcon from "../components/LinkIcon";
import { CSSTransition } from "react-transition-group";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="content-area-contact">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="contact-card">
            <img className="contact-card-me-img" src={me} alt="Me" />
            <div className="homeTextArea">
              <h2 className="name">TUOMAS HYTTINEN</h2>
              <div>
                <span>mail: </span>
                <a href="mailto: tuomas.op.hyttinen@student.jyu.fi">
                  tuomas.op.hyttinen@student.jyu.fi
                </a>
              </div>
              <p>phone: +358503425583</p>
              <p className="contact-card-find-me">Find me also from:</p>
              <div className="contact-card-icons">
                <LinkIcon
                  url="https://fi.linkedin.com/in/tuomas-hyttinen"
                  icon="bi-linkedin"
                />
                <LinkIcon
                  url="https://www.facebook.com/rumpalitomppa"
                  icon="bi-facebook"
                />
                <LinkIcon
                  url="https://www.instagram.com/rumpalitomppa/"
                  icon="bi-instagram"
                />
                <LinkIcon url="https://gitlab.jyu.fi/tuooulpe/" icon="bi-git" />
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Contact;
