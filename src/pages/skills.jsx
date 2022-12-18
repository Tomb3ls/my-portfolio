import React, { Component } from "react";
import SkillImage from "../components/SkillImage";
import JobCard from "../components/JobCard/JobCard";
import { CSSTransition } from "react-transition-group";

class Skills extends Component {
  state = {
    primarySkills: [
      {
        name: "JavaScript",
        picture: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        name: "HTML5",
        picture: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
      },
      {
        name: "CSS3",
        picture: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      },
      {
        name: "React",
        picture: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      },
      {
        name: "Java",
        picture: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      },
      {
        name: "C#",
        picture: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
      },
      {
        name: "GIT",
        picture:
          "https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png",
      },
      {
        name: "Windows",
        picture: "https://cdn-icons-png.flaticon.com/128/732/732225.png",
      },
      {
        name: "MacOS",
        picture: "https://cdn-icons-png.flaticon.com/128/2/2235.png",
      },
      {
        name: "Office365",
        picture: "https://cdn-icons-png.flaticon.com/128/732/732222.png",
      },
      {
        name: "VisualStudioCode",
        picture: "https://code.visualstudio.com/assets/images/code-stable.png",
      },
    ],

    secondarySkills: [
      {
        name: "UML",
        picture: "https://cdn-icons-png.flaticon.com/512/4763/4763645.png",
      },
      {
        name: "AI",
        picture: "https://cdn-icons-png.flaticon.com/512/900/900961.png",
      },
      {
        name: "C++",
        picture: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      },
      {
        name: "Command prompt",
        picture: "https://cdn-icons-png.flaticon.com/512/7650/7650501.png",
      },
      {
        name: "Node.js",
        picture: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      },
      {
        name: "Agile",
        picture: "https://cdn-icons-png.flaticon.com/512/5108/5108590.png",
      },
    ],

    commonSkills: [
      "Over 5 years customer service experience",
      "I have done B2B & B2C couple of years",
      "Been in managerial positions",
      "Good spoken and excellent written english",
      "Done project management with tools like Gantt and recource palanning. Done project reports.",
      "Been involved in a software development processes as a customer",
      "Done technical documentation for many different purposes",
      "Photography, Adobe Lightroom & Photoshop",
      "AV-technology extensively",
      "Couple of years studio recording experience",
    ],

    worked: [
      {
        name: "Nordic Drones Oy",
        period: "03/2022 - present",
        type: "full-time",
        title: "Drone-specialist",
        explain:
          "Versatile tasks in product development and manufacturing. Project management, quality system and technical documentation related duties.",
        learned:
          "At Nordic Drones I have learned a lot about project management, product designing, manufacturing and technology business. I have led manufacturing team and done documentation regarding processes and quality systems.",
        site:
          "https://nordicdrones.fi/"  
      },
      {
        name: "Jyväskylän Kongressikeskus/Messut Oy",
        period: "10/2017 - 07/2020",
        type: "full-time",
        title: "Customer service technician",
        explain:
          "Customer service technician, fully responsible for the event hall's audiovisual technology services including its quality, operation and personnel management. Versatile and rapidly changing tasks, during the events. Communication with many different stakeholders. I also worked in english and communicated with many different artists crews from all over the world.",
        learned:
          "Service design, customer service, B2B/B2C sales and project management. Most valuable lesson was to lear addapt to different situations and react to them quickily.",
        site:
          "https://www.paviljonki.fi/" 
      },
      {
        name: "StaffPoint Oy",
        period: "09/2015 - 10/2017",
        type: "part-time / full-time",
        title: "Many different roles at Paviljonki",
        explain:
          "Customer service at Jyväskylän Paviljonki. I worked for example as a concert hall assistant and technician. The job included managerial responsibilities during the events.",
        learned:
          "Managerial duties, customer service and additional sales. I also worked in English.",
        site:
          "https://www.staffpoint.fi/" 
      },
    ],
  };

  render() {
    return (
      <div className="content-area-skills">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="skills-content">
            <div className="skills">
              <h1 className="heading highlighted">What I know? </h1>
              <h4>PRIMARY</h4>
              <div className="skill-area">
                {this.state.primarySkills.map((object, i) => (
                  <SkillImage
                    skill={object.name}
                    picture={object.picture}
                    key={i}
                  />
                ))}
              </div>
              <h4>SECONDARY</h4>
              <div className="skill-area">
                {this.state.secondarySkills.map((object, i) => (
                  <SkillImage
                    skill={object.name}
                    picture={object.picture}
                    key={i}
                  />
                ))}
              </div>
              <h4>COMMON</h4>
              <div className="skill-area">
                <ul>
                  {this.state.commonSkills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="where-worked">
              <h1 className="heading">Where have I worked?</h1>
              <div className="work-area">
                {this.state.worked.map((worked) => (
                  <JobCard
                    key={worked.name}
                    name={worked.name}
                    period={worked.period}
                    type={worked.type}
                    title={worked.title}
                    explain={worked.explain}
                    learned={worked.learned}
                    site={worked.site}
                  />
                ))}
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Skills;
