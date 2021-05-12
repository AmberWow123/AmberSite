import Menubar from "./components/0_menubar/Menubar";
import Intro from "./components/1_intro/Intro";
import Skills from "./components/2_skills/Skills";
import Materials from "./components/3_materials/Materials";
import Projects from "./components/4_projects/Projects";
import Contact from "./components/5_contact/Contact";
import "./app.scss"

function App() {
  return(
    <div className="app">
      <Menubar/>
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
