import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Navbar from "./components/navbar"; 
import Comp1 from "./components/comp1";  
import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Lastdiv from "./components/lastdiv";
import Upload from "./components/upload";  
import Projectdesc from "./components/projectdesc";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />  */}

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

        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
