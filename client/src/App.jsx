import Comp1 from "../src/components/comp1.jsx";
import Navbar from "./components/navbar.jsx"; 
import Skills from "./components/skills.jsx";
import Contact from "./components/contact.jsx";
import Projects from "./components/projects.jsx";
import Lastdiv from "./components/lastdiv.jsx";
import Projectdesc from "./components/projectdesc.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
        } />

	    <Route path="/projects/:projectname" element={<Projectdesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
