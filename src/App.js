import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-poppins bg-secondary min-h-screen text-white">
    <div className="fixed w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;