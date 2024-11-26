import Comp1 from "../src/components/comp1.jsx";
import Navbar from "./components/navbar.jsx"; 
import Skills from "./components/skills.jsx";
import Contact from "./components/contact.jsx";
import Projects from "./components/projects.jsx";
import Lastdiv from "./components/lastdiv.jsx";

function App() {
  return (
    <>
      <Navbar />
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
  );
}

export default App;
