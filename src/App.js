import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import SideProjects from './components/SideProjects';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/sideprojects' element={<SideProjects />} />
          </Routes>
      </Router>
  );
}

export default App;
