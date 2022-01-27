import React, { Component } from "react";
import SkillCard from "../components/skillCard";
import JobCard from "../components/jobCard";

class Skills extends Component {
  state = {
    mainSkills: [
      "Java",
      "C#",
      "JavaScript",
      "XHTML",
      "HTML5",
      "DOM",
      "CSS",
      "React",
      "JSX",
      "GIT",
      "Windows",
      "MacOS",
      "Office365",
      "VisualStudio",
    ],

    someSkills: [
      "UML",
      "Datanetworks and protocols",
      "AI",
      "ER",
      "C/C++",
      "Linux",
      "Node.js",
    ],

    wannalearnSkills: ["Archimate", "WPO", "SEO", "Python"],

    commonSkills: [
      "Lots of customer service experience",
      "B2B",
      "Photography",
      "Adobe Lightroom & Photoshop",
      "AV-technology",
      "Good english skills",
      "Project management",
      "development of information systems from the customer's point of view",
      "Documentation",
    ],

    worked: [
      {
        name: "Jyväskylän Kongressikeskus Oy / Jyväskylän Messut Oy",
        period: "10/2017 - 07/2020 fulltime",
        title: "Customer service technician",
        explain:
          "Main responsibility of the conserthall and conference service related to AV-technology. Sales and design of audiovisual services according to customer needs. Project management and leading of the technical services during events.",
      },
      {
        name: "StaffPoint Oy",
        period: "09/2015 - 10/2017",
        explain:
          "Worked in positions like customer service technician, stage manager and event staff at the Jyväskylän Paviljonki.",
      },
    ],
  };

  render() {
    return (
      <div className="contentAreaSkills defaultBackground">
        <div className="whereWorked">
          <h1 className="heading">WERE HAVE I WORKED?</h1>
          <div className="workArea">
            {this.state.worked.map((worked) => (
              <JobCard
                key={worked.name}
                name={worked.name}
                period={worked.period}
                explain={worked.explain}
              />
            ))}
          </div>
        </div>
        <div className="technicalSkills">
          <h1 className="heading">TECH SKILLS</h1>
          <div className="allSkillsArea">
            <div className="skillArea">
              <p className="skillHeading">PRIMARY SKILLS</p>
              {this.state.mainSkills.map((string, i) => (
                <SkillCard skill={string} key={i} />
              ))}
            </div>
            <div className="skillArea">
              <p className="skillHeading">SECONDARY SKILLS</p>
              {this.state.someSkills.map((string, i) => (
                <SkillCard skill={string} key={i} />
              ))}
            </div>
            <div className="skillArea">
              <p className="skillHeading">THESE I WOULD LOVE TO LEARN</p>
              {this.state.wannalearnSkills.map((string, i) => (
                <SkillCard skill={string} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="commonSkills">
          <h1 className="heading">COMMON SKILLS I HAVE EXPERIENCE WITH</h1>
          <div className="skillAreaLong">
            {this.state.commonSkills.map((string, i) => (
              <SkillCard skill={string} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
