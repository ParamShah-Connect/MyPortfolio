import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comp1 from "../src/components/comp1.jsx";
import Navbar from "./components/navbar.jsx";
import Skills from "./components/skills.jsx";
import Contact from "./components/contact.jsx";
import Projects from "./components/projects.jsx";
import Lastdiv from "./components/lastdiv.jsx";
import Projectdesc from "./components/projectdesc.jsx";

function App() {
  useEffect(() => {
    let visits = localStorage.getItem("visits");
    console.log("total visits: ",visits)
    if (visits) {
      localStorage.setItem("visits", parseFloat(visits) + 1); 
    } else {
      localStorage.setItem("visits", 1); 
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="navbar">
                <Navbar />
              </div>
              <div id="about">
                <Comp1 />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Lastdiv />
            </>
          }
        />

        <Route path="/projects/:projectname" element={<Projectdesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;