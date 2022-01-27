import React, { Component } from "react";
import me from "../images/ME.jpg";
import jemo from "../images/JEMO.jpg";
import bike from "../images/BIKE.jpg";
import studio from "../images/STUDIO.jpg";
import keikka from "../images/KEIKKA.jpg";
import { Carousel, CarouselItem } from "react-bootstrap";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <div className="contentAreaAbout defaultBackground">
        <div className="aboutMe">
          <img className="meImg" src={me} alt="Me" />
          <h1 className="heading aboutmeHeading">Shortly,</h1>
          <p className="aboutmeText">
            I’m a tech oriented team player with determined attitude, always
            looking for new technical applications and solutions to get inspired
            by. I have continuously growing interest to learn coding and
            app-development. At work I value fluent and open teamwork together
            with customer satisfaction.
            <br></br>
            <br></br>
            Currently I'm studying information system science at Jyväskylä
            University. I might be just starting my career, but I'm more than
            enthustiastic to jump right in and show everyone my attitude and
            abilities.
          </p>
        </div>
        <div className="hobbies">
          <Carousel className="hobbyCarousel">
            <CarouselItem>
              <img className="d-block w-100" src={jemo} alt="First slide" />
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100" src={bike} alt="Second slide" />
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100" src={studio} alt="Third slide" />
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100" src={keikka} alt="Fourth slide" />
            </CarouselItem>
          </Carousel>

          <p className=".hobbiesText">
            More througly,
            <br></br>
            <br></br>I am also a professional drummer and I have performed at
            hundreds of gigs all over Finland. At the moment, I don't do gigs
            actively, but I'm a passionate music enthusiast. I still do live
            mixing and know a lot of about AV-technologies and equipment as well
            as networking them.
            <br></br>
            <br></br>
            At my free time I usually hang out with my family or go do outdoor
            sports with my dog. Electric cycling is also on the list as a new
            activity. Even at the worst days of the year (usually the coldest
            ones) I could be spotted on the back of the bike. I'm easily excited
            by nature and easily immerse myself deeply into new hobbies or
            things that interest me. 24 years of passionate drumming practise
            has developed my learning skills and tactics. Because of this I
            consider myself a quick learner. I thrive for total understanding
            and perfection in everything I do and that's why I'm very committed
            to my tasks. Never leave anything unclear!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
