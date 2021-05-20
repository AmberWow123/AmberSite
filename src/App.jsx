import Menubar from "./components/0_menubar/Menubar";
import Intro from "./components/1_intro/Intro";
import Skills from "./components/2_skills/Skills";
import Materials from "./components/3_materials/Materials";
import Projects from "./components/4_projects/Projects";
import Contact from "./components/5_contact/Contact";
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
        <Skills/>
        <Materials/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
