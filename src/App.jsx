import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import EducationSkills from "./components/EducationSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingNav from "./components/FloatingNav";
import "./App.css";

function App() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <EducationSkills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;