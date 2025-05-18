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

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' }
  ];

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
            {menuItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={`#${item.id}`} 
                  className="font-medium hover:text-synaptic-teal transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
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
            {menuItems.map((item) => (
              <li key={item.label} className="py-3 border-b border-gray-100">
                <a 
                  href={`#${item.id}`} 
                  className="block font-medium hover:text-synaptic-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
