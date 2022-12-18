import React, { Component } from "react";

/*Simple react component which shows job information according to given props:
name: Name of the job
period: Time-period
type: full-time/part-time
title: job title
explain: detailed information about the job
learned: skills learned in the job
*/
class JobCard extends Component {
  state = {};

  render() {
    return (
      <div className="job-card">
        <div className="job-card-heading">
          <div>
            <h2>{this.props.name}</h2>
            <div>
              <p>{this.props.period}</p>
              <p>{this.props.type}</p>
            </div>
          </div>
          <p className="job-card-title">{this.props.title}</p>
        </div>
        <div className="descriptions">
          <h3>Description:</h3>
          <p>{this.props.explain}</p>
          <h3>What I learned:</h3>
          <p>{this.props.learned}</p>
        </div>
        <div className="job-card-site">
          <a href={this.props.site}>{this.props.site}</a>
        </div>
      </div>
    );
  }
}

export default JobCard;
