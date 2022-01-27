import React, { Component } from "react";
import StudyCard from "../components/studyCard";

class Education extends Component {
  state = {};

  render() {
    return (
      <div className="contentAreaEducation defaultBackground">
        <div>
          <h1 className="heading hhorizmargin">EDUCATION</h1>
        </div>
        <div className="education">
          <StudyCard
            time={200}
            icon="bi-mortarboard"
            school="Jyväskylän yliopisto"
            years="2020 - Present"
            program="Tietojärjestelmätieteen kandidaatti- ja maisteri koulutus"
          />
          <StudyCard
            time={300}
            icon="bi-mortarboard"
            school="Jyväskylän ammattiopisto"
            years="2013 - 2015"
            program="Muusikon koulutus, lyömasoittimet"
          />
          <StudyCard
            time={400}
            icon="bi-mortarboard"
            school="Vammalan Lukio"
            years="2008-2011"
            program="Ylioppilastutkinto"
          />
        </div>
        <div style={{ marginTop: "4em" }}>
          <h1 className="heading hhorizmargin">OTHER</h1>
        </div>
        <div className="extraeducation">
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
    );
  }
}

export default Education;
