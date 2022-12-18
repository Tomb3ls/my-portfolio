import React, { Component } from "react";
import StudyCard from "../components/StudyCard/StudyCard";
import { CSSTransition } from "react-transition-group";

class Education extends Component {
  state = {};

  render() {
    return (
      <div className="content-area-education">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="education-content">
            <h1 className="heading highlighted">Education</h1>
            <div className="education">
              <StudyCard
                time={200}
                icon="bi-mortarboard"
                school="University of Jyväskylä"
                years="2020 - Present"
                program="Information systems sciense"
              />
              <StudyCard
                time={300}
                icon="bi-mortarboard"
                school="Jyväskylän ammattiopisto"
                years="2013 - 2015"
                program="Musician, drums and percussions"
              />
              <StudyCard
                time={400}
                icon="bi-mortarboard"
                school="Vammala High School"
                years="2008-2011"
                program="Matriculation examination"
              />
            </div>
            <h1 className="heading highlighted">Additional</h1>
            <div className="education">
              <StudyCard
                time={500}
                icon="bi-check2-circle"
                school="Järjestyksenvalvojan peruskurssi"
                years="voimassa"
              />
              <StudyCard
                time={600}
                icon="bi-check2-circle"
                school="Hygieniapassi"
                years="voimassa"
              />
              <StudyCard
                time={700}
                icon="bi-check2-circle"
                school="Työturvallisuuskortti"
                years="voimassa"
              />
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Education;
