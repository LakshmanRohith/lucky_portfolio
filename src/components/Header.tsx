
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">SLR</div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-primary transition-colors">Education</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('certificates')} className="hover:text-primary transition-colors">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/LakshmanRohith" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/lakshman-rohith-sanagapalli/" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:lakshmansanagapalli@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('education')} className="text-left hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('certificates')} className="text-left hover:text-primary transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
