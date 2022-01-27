import React, { Component } from "react";
import MessageMe from "../components/messageMe";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contentAreaContact">
        <MessageMe></MessageMe>
      </div>
    );
  }
}

export default Contact;
