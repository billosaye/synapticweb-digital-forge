
import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {['Services', 'Work', 'Process', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-medium hover:text-synaptic-teal transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-synaptic-indigo"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-3 py-4 animate-fade-in">
          <ul className="flex flex-col container mx-auto">
            {['Services', 'Work', 'Process', 'About', 'Contact'].map((item) => (
              <li key={item} className="py-3 border-b border-gray-100">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block font-medium hover:text-synaptic-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="py-3 mt-2">
              <a 
                href="#contact" 
                className="btn-primary inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
