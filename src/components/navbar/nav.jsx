import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent bg-opacity-75 backdrop-blur-lg text-textMain p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-Playfair">My Portfolio</div>
        
        {/* Hamburger menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-textMain hover:text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-textMain hover:text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Menu links for large devices */}
        <div className="hidden md:flex md:space-x-4 md:font-medium md:text-lg text-textMain">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Menu links for small devices */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-textContainer bg-opacity-75 backdrop-blur-lg p-4 rounded-lg text-textMain">
            <a href="#home" className="block hover:underline" onClick={closeMenu}>Home</a>
            <a href="#about" className="block hover:underline" onClick={closeMenu}>About</a>
            <a href="#services" className="block hover:underline" onClick={closeMenu}>Services</a>
            <a href="#gallery" className="block hover:underline" onClick={closeMenu}>Gallery</a>
            <a href="#contact" className="block hover:underline" onClick={closeMenu}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
