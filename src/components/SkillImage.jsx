import React, { Component } from "react";

/*React component which shows given image location and sets alt to image name*/
class SkillImage extends Component {
  state = {};

  render() {
    return (
        <div>
          <a href={this.props.picture}>
            <img
              className="skill-image"
              src={this.props.picture}
              alt={this.props.name}
            ></img>
          </a>
        </div>
    );
  }
}

export default SkillImage;
