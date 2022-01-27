import React, { Component } from "react";

class JobCard extends Component {
  state = {};

  jobCard = {
    backgroundColor: "#1F4B65",
    borderRadius: "10px",
    width: "auto",
    maxWidth: "20em",
    height: "auto",
    border: "0.5em solid #1F4B65",
  };

  render() {
    return (
      <div className="jobCard glow-element" style={this.jobCard}>
        <h4 style={{ color: "white", marginBottom: "0.7em" }}>
          {this.props.name}
        </h4>
        <p style={{ color: "white", marginBottom: "0.7em" }}>
          {this.props.period}
        </p>
        <div>
          <p>{this.props.explain}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
