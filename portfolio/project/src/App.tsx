import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CV from './pages/CV';

import ProjectHospitality from './pages/projects/ProjectHospitality';





function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          
          <Route path="/project/hospitality" element={<ProjectHospitality />} />
          
          
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;