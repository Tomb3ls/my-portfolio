import React from "react";

/*Creates card like portfolio element with given information*/
function PortfolioWork(props) {

    return(
        <div className="portfolio-work">
          <h3 className="project-heading highlighted-dark">{props.name}</h3>
          <p className="project-skills">{props.skills}</p>
          <img
            className="default-picture"
            src={props.picture}
            alt={props.alt}
          ></img>
          <div className="project-details">
            <p>
              {" "}
              <strong className="highlighted-dark">PROJECT DETAILS</strong>
              <br></br>
              <br></br>
              {props.description}
              <br></br>
              <br></br>
            </p>
            <div className="to-the-git highlighted-dark">
                <p>To the source code</p>
                <i className="bi-arrow-down"></i>
            </div>
            <a href={props.git} className="project-git-link">
                <i className="bi-git"></i>
            </a>
          </div>
        </div>
    );
}

export default PortfolioWork;