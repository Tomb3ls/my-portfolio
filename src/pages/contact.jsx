import React, { Component } from "react";
import MessageMe from "../components/messageMe";
import me from "../images/ME.jpg";
import LinkIcon from "../components/linkIcon";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contentAreaContact defaultBackground">
        <div className="contactCard">
          <img className="meContactCard" src={me} alt="Me" />
          <div className="homeTextArea">
            <h2 className="name">TUOMAS HYTTINEN</h2>
            <div>
              <span>mail: </span>
              <a href="mailto: tuomas.op.hyttinen@student.jyu.fi">
                tuomas.op.hyttinen@student.jyu.fi
              </a>
            </div>
            <p>phone: +358503425583</p>
            <p className="contactCardFindMe">Find me also from:</p>
            <div className="contactCardIcons">
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
      </div>
    );
  }
}

export default Contact;
