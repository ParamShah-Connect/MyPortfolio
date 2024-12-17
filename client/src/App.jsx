import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Comp1 from "./components/comp1.jsx";
import Skills from "./components/skills.jsx";
import Contact from "./components/contact.jsx";
import Projects from "./components/projects.jsx";
import Lastdiv from "./components/lastdiv.jsx";
import Projectdesc from "./components/projectdesc.jsx";
import Upload from "./components/upload.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Comp1 />
              <Skills />
              <Projects />
              <Contact />
              <Lastdiv />
            </>
          }
        />
        <Route path="/projects/:projectname" element={<Projectdesc />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/hello" element={<h1>hey there</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
