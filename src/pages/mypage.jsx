import React, { Component } from "react";
import NavigationBar from "../components/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./home";
import AboutMe from "./about";
import Education from "./education";
import GIT from "./git";
import Contact from "./contact";
import ErrorPage from "./errorpage";
import Skills from "./skills";
import UpNav from "../components/upnav";

class MyPage extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <div className="fullArea">
          <CSSTransition
            in={true}
            timeout={300}
            classNames="naventer"
            appear={true}
          >
            <NavigationBar className="navigationBarArea" color={'rgba(31, 75, 101, 0.9)'}/>
          </CSSTransition>
          <div className="copyright">
            <p style={{margin: '0', padding:'0'}}>© Tuomas Hyttinen, 2022</p>
          </div>
          <CSSTransition
            in={true}
            timeout={300}
            classNames="upnaventer"
            appear={true}
          >
            <UpNav />
          </CSSTransition>
          <Routes>
            <Route path="/my-portfolio" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<GIT />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default MyPage;
