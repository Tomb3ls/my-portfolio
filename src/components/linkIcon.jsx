import React, { Component } from "react";

class LinkIcon extends Component {
  state = {};

  render() {
    return (
      <div className="link-icon">
        <a href={this.props.url}>
          <i className={this.props.icon}></i>
        </a>
      </div>
    );
  }
}

export default LinkIcon;
