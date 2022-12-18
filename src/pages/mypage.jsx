import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutMe from "./About";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import Preloader from "../components/Loader/Preloader";
import TopElements from "../components/TopElements";
import "../cursorstyle.css";

function MyPage() {
  /*Loading screen, code ->*/
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  /*Custom cursor code ->*/
  const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const cursorMovement = (e) => {
      const x =
        e.clientX -
        5; /*-5 because of cursors dot size is 10 and must be centered*/
      const y =
        e.clientY -
        5; /*-5 because of cursors dot size is 10 and must be centered*/
      setCursorLocation({ x, y });
    };
    window.addEventListener("mousemove", cursorMovement);
    return () => {
      window.removeEventListener("mousemove", cursorMovement);
    };
  }, []);

  /*Creates a dot that can be lighted on by mouse click*/
  function createDot() {
    let dot = document.createElement("div");
      dot.style.background = "#FE4A49";
      dot.classList.add("dot");
      dot.style.width = `${Math.random() * 1.25}vw`; //random size
      dot.style.height = dot.style.width;
      dot.style.left = `${Math.floor(Math.random() * 100)}vw`; //position area width
      dot.style.top = `${Math.floor(Math.random() * 100)}vh`; //position area height

      /*Hover once effect*/
      dot.addEventListener("mouseover", function () { 
        dot.animate(
          [
            { boxShadow: "0px 0px 0px white"},
            { boxShadow:  "0px 0px 15px white"},
          ],
          {
            duration: 1000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        )}, { once: true });
      
      /*Click once event */
      dot.addEventListener("click", function (){
        dot.style.background = "white";
        dot.animate(
          [
            { boxShadow: "0px 0px 0px white" },
            { boxShadow:  "0px 0px 15px white"},
          ],
          {
            duration: 1000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        )}, { once: true });
      return dot;
  }

  /*Creating background dot effect code ->*/
  useEffect(() => {
    const dotFrequency = 35;
    const createdDots = [];

    // Create dots in a loop
    for (let i = 0; i < dotFrequency; i++) {
      const dott = createDot();
      createdDots.push(dott);
      document.body.append(dott);
    }

    // Keyframes
    createdDots.forEach((element, i) => {
      let newlocation = {
        x: Math.random() * (i % 2 === 0 ? -8 : 8), //every other different angle
        y: Math.random() * 8,
      };

      element.animate( // dot movement animation
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${newlocation.x}rem, ${newlocation.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );

      //dot random glow in out animation
      let max = 10000;
      let min = 4000;
      let glowtime = Math.random() * (max - min) + min;
      element.animate(
        [
          { boxShadow: "0 0 0px var(--color-primary-2)" },
          { boxShadow: "0 0 10px var(--color-primary-2)" },
          { boxShadow: "0 0 0px var(--color-primary-2)" }
        ],
        {
          duration: glowtime,
          iterations: Infinity,
          easing: "ease-in",
        }
      );
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div
        className="custom-cursor"
        style={{
          transform: `translate3d(${cursorLocation.x}px, ${cursorLocation.y}px, 0)`,
        }}
      />
      {loading ? (
        <Preloader />
      ) : (
        /*Visible web-page area*/
        <div className="full-area">
          <NavigationBar className="navigationBarArea" />
          <TopElements />
          <div className="copyright">
            <p style={{ margin: "0", padding: "0" }}>© Tuomas Hyttinen, 2022</p>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default MyPage;
