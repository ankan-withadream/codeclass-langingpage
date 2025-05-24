import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import Button from './shared/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg shadow-primary-900/50' : 'bg-transparent'
      } py-4 lg:py-5`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/codeclass-logo.png" 
              alt="Code Class Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white">Code Class</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#courses" className="font-medium text-gray-200 hover:text-accent-500 transition-colors">Courses</a></li>
                <li><a href="#syllabus" className="font-medium text-gray-200 hover:text-accent-500 transition-colors">Syllabus</a></li>
                <li><a href="#benefits" className="font-medium text-gray-200 hover:text-accent-500 transition-colors">Benefits</a></li>
                <li><a href="#testimonials" className="font-medium text-gray-200 hover:text-accent-500 transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="font-medium text-gray-200 hover:text-accent-500 transition-colors">FAQ</a></li>
              </ul>
            </nav>
            <Button href="#enroll" variant="primary">Enroll Now</Button>
          </div>
          
          <button 
            className="lg:hidden text-white hover:text-accent-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary-800 border-t border-primary-700">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#courses" 
                  className="block py-2 font-medium text-gray-200 hover:text-accent-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="#syllabus" 
                  className="block py-2 font-medium text-gray-200 hover:text-accent-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Syllabus
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="block py-2 font-medium text-gray-200 hover:text-accent-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="block py-2 font-medium text-gray-200 hover:text-accent-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="block py-2 font-medium text-gray-200 hover:text-accent-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li className="pt-2">
                <Button 
                  href="#enroll" 
                  variant="primary" 
                  fullWidth 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;