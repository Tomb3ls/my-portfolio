import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import me from "../images/ME.jpg";
import jemo1 from "../images/JEMO1.jpg";
import jemo2 from "../images/JEMO2.jpg";
import bike from "../images/BIKE.jpg";
import studio1 from "../images/STUDIO.jpg";
import studio2 from "../images/STUDIO2.jpg";
import keikka1 from "../images/KEIKKA.jpg";
import keikka2 from "../images/KEIKKA2.jpg";
import keikka3 from "../images/KEIKKA3.jpg";
import drums from "../images/DRUMS.jpg";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <div className="content-area-about">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="mainenter"
          appear={true}
        >
          <div className="about-content">
            <h1 className="heading about-heading highlighted">About me</h1>
            <div className="about-short">
            <img className="about-me" src={me} alt="me"></img>
              <div className="about-specs">
                <h5 className="highlighted"><strong>Name</strong></h5>
                <p>Tuomas Hyttinen</p>
                <h5 className="highlighted"><strong>Age</strong></h5>
                <p>30y</p>
                <h5 className="highlighted"><strong>Location</strong></h5>
                <p>Jyväskylä / FIN</p>
                <h5 className="highlighted"><strong>School</strong></h5>
                <p>University of Jyväskylä / Information Systems Sciense</p>
              </div>
            </div>
            <div className="about-keywords">
              <h5 className="highlighted"><strong>Interests</strong></h5>
              <ul>
                <li>Front-end coding</li>
                <li>Mobile & web apps</li>
                <li>Cyber security</li>
                <li>Usability</li>
                <li>Continuous learning</li>
                <li>Customer service and business</li>
              </ul>
              <br></br>
              <h5 className="highlighted"><strong>Hobbies</strong></h5>
              <ul>
                <li>Coding</li>
                <li>Drumming</li>
                <li>Live mixing and AV-technology</li>
                <li>Electric cycling</li>
                <li>Photography</li>
                <li>Dogs and nature</li>
              </ul>
            </div>
            <div className="about-text">
              <h4 class="highlighted">Does your company need a person who seamlessly adapts to different situations? </h4>
              <p>
                Three years ago I had a permanent job as an AV-technician at the one of the biggest conserthalls in Finland.
                Then the corona started and I was laid off from my job because of the canceled events.
                That put me in a situation where I was really forced to consider, what is the actual thing I want to do as my job.
                I had lots of freetime so I started learning Java, did couple of simple games and found coding to be really fun and addictive!
                During my life I have always been interested in technology, software and solving problems.
                I'm also a very systematic person. I found out that coding match these interests and characteristics in me.
                These thoughts led me to study Information Technology to the University of Jyväskylä.
                And it hasn't felt bad decision at all!
                In three years I have learned a lot and found genuine enthusiasm for a new field.
                <br></br><br></br>
                At my previous workplaces I have been characterized as a social, dedicated and active employee.
                I have done A LOT of customer service related work which I really have enjoyed.
                Project management, customer service and B2B/B2C sales are also familiar areas to me. 
                At work I value fluent and open teamwork, satisfied customers and solution-oriented thinking. 
                Currently in the final stages of my bachelor's studies in information system science at the Jyväskylä University.
                <br></br><br></br>
                I am also a professional drummer and I have performed at hundreds of gigs all over Finland.
                At the moment, I don't do gigs actively, but I'm a passionate music enthusiast.
                I still do live mixing and know a lot of about AV-technologies and equipment as well as networking them.
                <br></br><br></br>
                At home I usually hang out with my family or go do outdoor sports with my dog. 
                Electric cycling is also on the list as a new activity.
                Even at the worst days of the year (usually the coldest ones) I could be spotted on the back of the bike. 
                I'm easily excited by nature and immerse myself deeply into new hobbies or things that interest me. 
                24 years of passionate drumming practise has developed my learning skills and tactics.
                Because of this I consider myself a quick learner. 
                I thrive for total understanding and perfection in everything I do and that's why I'm very committed to my tasks.
                "Never leave anything unclear and be afraid to learn from wiser than yourself" would kinda be my motto.
              </p>
            </div>
            <div className="about-funnies">
              <h5 className="highlighted"><strong>Six fun facts about me</strong></h5>
              <ol>
                <li>Played a few hundred gigs as a drummer</li>
                <li>Played drums since the age of six</li>
                <li>Listened also a few hundred business seminars</li>
                <li>Repair my own cars</li>
                <li>First job at age of 13 at the construction site</li>
                <li>Have done youth work for years and have also been a support person</li>
              </ol>
            </div>
            <div className="about-gallery">
              <img src={jemo1} alt="My dog"/>
              <img src={bike} alt="My bike"/>
              <img src={studio1} alt="Studio session setup"/>
              <img src={keikka1} alt="Drumming gig"/>
              <img src={jemo2} alt="My dog"/>
              <img src={keikka2} alt="Drumming gig"/>
              <img src={keikka3} alt="Drumming gig"/>
              <img src={studio2} alt="Studio session setup"/>
              <img src={drums} alt="Studio session setup"/>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default AboutMe;
