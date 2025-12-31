import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import SideProjects from './components/SideProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <SideProjects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
