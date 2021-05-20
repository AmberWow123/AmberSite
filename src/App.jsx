import Menubar from "./components/0_menubar/Menubar";
import Intro from "./components/1_intro/Intro";
import Skills from "./components/4_skills/Skills";
import Materials from "./components/5_materials/Materials";
import Projects from "./components/3_projects/Projects";
import Contact from "./components/6_contact/Contact";
import About from "./components/2_about/About";
import "./app.scss"
import { useState } from "react";
import SideMenu from "./components/0.5_sidemenu/SideMenu";

function App() {
  // function for open menu (light <-> dark mode switching)
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <div className="app">
      {/* with 'menuOpen={menuOpen} setMenuOpen={setMenuOpen}'
          means that section varies depends on hamburger clicking */}
      <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Projects/>
        <Skills/>
        <Materials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
