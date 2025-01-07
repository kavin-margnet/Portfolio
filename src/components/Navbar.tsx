import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['home', 'about', 'skills', 'portfolio','experience', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <span className="text-cyan-400 text-xl font-bold">Kavin.</span>
          </motion.div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 text-sm font-medium capitalize transition-colors duration-200`}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeSection"
                      className="h-0.5 bg-cyan-400 mt-1"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-navy-900/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`${
                activeSection === item
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              } block px-3 py-2 text-base font-medium capitalize w-full text-left`}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;