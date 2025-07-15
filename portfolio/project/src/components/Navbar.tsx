import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-blue-800">
            <BarChart3 className="h-8 w-8 text-teal-600" />
            <span>Carlton Njong</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/cv"
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              CV
            </Link>
            <Link 
              to="/contact"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200"
            >
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
              >
                Projects
              </button>
              <Link 
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/cv"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                CV
              </Link>
              <Link 
                to="/contact"
                className="block px-3 py-2 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 mx-3 text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;